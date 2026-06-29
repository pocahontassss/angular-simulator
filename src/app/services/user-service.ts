import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, Observable, of, tap } from 'rxjs';
import { LoaderService } from './loader-service';
import { UserApiService } from './user-api-service';
import { ShowMessageService } from './show-message-service';
import { IUser } from '../../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private loadService: LoaderService = inject(LoaderService);
  private userApiService: UserApiService = inject(UserApiService);
  private showMessageService: ShowMessageService = inject(ShowMessageService);
  
  private userSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  public readonly user$: Observable<IUser[]> = this.userSubject.asObservable();
  
  setUsers(users: IUser[]) {
    this.userSubject.next(users);
  }
  
  getUsers(): IUser[] {
    return this.userSubject.getValue();
  }
  
  loadUsers(): Observable<IUser[]> {
    this.loadService.showLoader();

    return this.userApiService.getUsers()
      .pipe(
        tap((users: IUser[]) => {
          this.setUsers(users);
        }),
        catchError((err) => {
          this.showMessageService.showError(err);
          return of([]);
          
        }),
        finalize(() => this.loadService.hideLoader())
      )
  }
}
