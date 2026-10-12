import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _isLoading$ = new BehaviorSubject<boolean>(false);

  public isLoading$: Observable<boolean> = this._isLoading$.asObservable();

  public showLoader() {
    this._isLoading$.next(true);
  }

  public hideLoader() {
    this._isLoading$.next(false);
  }
}
