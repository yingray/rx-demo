import Rx from "rx";

const source = Rx.Observable.create(observer => {
  observer.onNext("yingray say hi!");
  observer.onNext("frank say hi!");
  observer.onCompleted();
});

source.subscribe(
  value => console.log(`Next: ${value}`),
  error => console.log(`Error: ${error}`),
  () => console.log("Completed!")
);
