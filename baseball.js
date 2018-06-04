import Rx from "rx";

const now = new Date();
const myInterval = setInterval(() => console.log("."), 300);

const pitcher = arr =>
  Rx.Observable.interval(1000)
    .take(arr.length)
    .map(i => arr[i]);

const hitter = ball =>
  Rx.Observable.create(observer => {
    let hit = ball < 150;
    observer.onNext(hit ? `${ball}: H` : `${ball}: swing and miss`);
    if (hit) {
      setTimeout(() => {
        observer.onNext("Ball landing");
        observer.onCompleted();
      }, 2000);
    } else {
      observer.onCompleted();
    }
  });

pitcher([120, 103, 151, 98])
  // .concatMap(ball => hitter(ball))
  .flatMap(ball => hitter(ball))
  .subscribe(value => console.log(`${new Date() - now} ms: ${value}`), () => {}, () => clearInterval(myInterval));
