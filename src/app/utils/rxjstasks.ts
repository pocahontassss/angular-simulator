import { filter, interval, map, of, take } from "rxjs";

const my$ = of('Hello', 'RxJS');

my$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed')
});


const numbers$ = of(1, 2, 3, 4, 5);

numbers$
  .pipe(
    map(value => value * 10),
  )
  .subscribe(value => console.log(value));


of(1, 2, 3, 4, 5, 6, 7, 8)
  .pipe(
    filter(value => value % 2 ===0),
  )
  .subscribe(value => console.log(value));


const source$ = interval(1000).pipe(
  take(5)
)

source$.subscribe({
  next: (value) => console.log('Значение', value),
  complete: () => console.log('Поток завершен')
});
