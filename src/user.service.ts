import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { UserApiService } from './user-api.service';
import { MessageService } from './message.service';
import { LoaderService } from './loader.service';
import { IUser } from './app/interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userApiService: UserApiService = inject(UserApiService);
  messageServise: MessageService = inject(MessageService);
  loaderService: LoaderService = inject(LoaderService);
  
  private _users$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
 
  users$: Observable<IUser[]> = this._users$.asObservable();

  setUsers(users: IUser[]): void {
    this._users$.next(users);
  }

  getUsers(): IUser[] {
    return this._users$.value;
  }

  loadUsers(): void {
    this.loaderService.showLoader();
    this.userApiService.getUsers().pipe(
      catchError(error => {
        this.messageServise.showError('Ошибка загрузки пользователей');
        return of<IUser[]>([]);
      }),finalize(() => {
        this.loaderService.hideLoader();
      })
    ).subscribe(data => this._users$.next(data));
  }

}
