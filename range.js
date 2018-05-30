import Rx from "rx";

const source = Rx.Observable.range(1, 10);

source.subscribe(
  value => console.log(`Next: ${value}`),
  error => console.log(`Error: ${error}`),
  () => console.log("Completed!")
);