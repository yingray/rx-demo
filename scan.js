// http://reactivex.io/documentation/operators/scan.html
import Rx from "rx";

const source = Rx.Observable.interval(500)
  .take(6)
  .scan((acc, x) => acc + x);

source.subscribe(
  value => console.log(`Next: ${value}`),
  error => console.log(`Error: ${error}`),
  () => console.log("Completed!")
);
