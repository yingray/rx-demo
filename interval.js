import Rx from "rx";

const source = Rx.Observable.interval(500).take(3);

source.subscribe(
  value => console.log(`Next: ${value}`),
  error => console.log(`Error: ${error}`),
  () => console.log("Completed!")
);