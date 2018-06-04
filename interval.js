import Rx from "rx";

export const source = Rx.Observable.interval(1000).take(3);

source.subscribe(
  value => console.log(`Next: ${value}`),
  error => console.log(`Error: ${error}`),
  () => console.log("Completed!")
);
