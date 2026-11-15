import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {

  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoading(): Observable<boolean> {
    return this.isLoadingSubject.asObservable();
  }

  showLoader(): void {
    this.isLoadingSubject.next(true);
  }

  hideLoader(): void {
    this.isLoadingSubject.next(false);
  }

}
