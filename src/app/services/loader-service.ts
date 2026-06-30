import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  
  private loaderSubject: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public readonly loader$: Observable<boolean> = this.loaderSubject.asObservable();
  
  private timeoutId: number | undefined;
  
  showLoader() {
    if(this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    
    this.loaderSubject.next(true)
    
    this.timeoutId = setTimeout(() => {
      this.hideLoader();
    }, 5000);
  }
  
  hideLoader() {
    this.loaderSubject.next(false)
  }
}
