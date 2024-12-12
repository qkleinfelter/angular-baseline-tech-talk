import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, of, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {

  ngOnInit(): void {
    this.exampleObservable();
    this.exampleBehaviorSubject();
    this.exampleReplaySubject();
    this.operatorExample();
  }

  exampleObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');

  }

  exampleBehaviorSubject() {
    console.log("Begin Behavior Subject")
    const subject = new BehaviorSubject(0); // 0 is the initial value
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(3);
  }

  exampleReplaySubject() {
    console.log("Begin Replay subject")
    const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(5);
  }

  operatorExample() {
    console.log("Begin Operator Example")
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(map((x) => x * x))
      .pipe(filter(x => x % 2 == 0))
      .subscribe((v) => console.log(`value: ${v}`));
  }
}
