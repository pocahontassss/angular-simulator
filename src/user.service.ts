import { inject, Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { BehaviorSubject, tap, catchError, finalize, of } from 'rxjs';
import { IUser } from './interfaces/IUser';
import { LoaderService } from './loader.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private usersApi: UserApiService = inject(UserApiService);
  loader: LoaderService = inject(LoaderService);
  message: MessageService = inject(MessageService);


  private _usersSubject$ = new BehaviorSubject<IUser[]>([]);
  users$ = this._usersSubject$.asObservable();
  private isLoading: boolean = false;

  loadUsers() {
    if (this._usersSubject$.value.length === 0 && this.isLoading === false) {
      this.isLoading = true;
      this.loader.showLoader();
      this.usersApi.getUsers().pipe(
        tap(users => {
          this.setUsers(users);
        }),

        catchError(() => {
          this.message.showHttpError();
          return of([]);
        }),

        finalize(() => {
          this.isLoading = false;
          this.loader.hideLoader();
        })
      ).subscribe()
    }
  }

  setUsers(value: IUser[]) {
    this._usersSubject$.next(value);
  }

  getUsers() {
    return this.users$;
  }

}
