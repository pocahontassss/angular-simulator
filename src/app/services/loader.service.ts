import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoaderService {

  private document: Document = inject(DOCUMENT);
  private loaderSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loader$: Observable<boolean> = this.loaderSubject.asObservable();

  showLoader(): void {
    this.loaderSubject.next(true);
    this.document.body.classList.add('no-scroll');
  }

  hideLoader(): void {
    this.loaderSubject.next(false);
    this.document.body.classList.remove('no-scroll');
  }

}
