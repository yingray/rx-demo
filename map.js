// http://reactivex.io/documentation/operators/map.html
import Rx from "rx";

const source = Rx.Observable.interval(500)
  .take(3)
  .map(value => value * 2);

source.subscribe(
  value => console.log(`Next: ${value}`),
  error => console.log(`Error: ${error}`),
  () => console.log("Completed!")
);
