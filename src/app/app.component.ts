import { Component } from '@angular/core';
import { forkJoin, of, interval } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-forkJoin';

  //Forkjoin is used for waiting for multiple observables/apis to complete before emitting all of that data at once. Its most commonly used for waiting for data to load when navigating to a page and that data comes from many different apis.
  ngOnInit() {
    const example = forkJoin({
      observable1: of('Hello'),
      observable2: of('World').pipe(delay(1000)),
      observable3: interval(1000).pipe(take(1)),
      observable4: interval(1000).pipe(take(2)),
      observable5: of('RESULT')
    })

    example.subscribe(val => console.log(val))
  }
}
