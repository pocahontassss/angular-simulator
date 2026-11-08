import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {

  private _loaderSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loader$ = this._loaderSubject$.asObservable();

  showLoader(): void {
    this._loaderSubject$.next(true);
  }

  hideLoader(): void {
    this._loaderSubject$.next(false);
  }

}
