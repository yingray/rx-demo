import Rx from "rx";
import { resolve } from "path";

const arr = ["1", "1", "1", "2", "2", "2", "3", "3", "3", "4"];
const count = 3;

const datastore = x => new Promise((resolve, reject) => setTimeout(() => resolve("delete: ", x), 1000));
// const query = x => new Promise((resolve, reject) => setTimeout(() => resolve("delete: ", x), 1000));

const source = Rx.Observable.from(arr)
  .bufferWithCount(count)
  .concatMap(x => Rx.Observable.of(x).delay(1000))
  .map(x => {
    console.log("map", x);
    return x.map(y => ({
      a: 1,
      y
    }));
  })
  .map(x => {
    console.log("arr", x);
    return x;
  })
  .concatMap(x => Rx.Observable.fromPromise(datastore(x)));
// .map(x => {
//   console.log("after datastore", x);
//   return x;
// });

source.subscribe(
  value => console.log(`Next: ${value}`),
  error => console.log(`Error: ${error}`),
  () => console.log("Completed!")
);

console.log("end");
