import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { UserApiService } from './user-api.service';
import { MessageService } from './message.service';
import { LoaderService } from './loader.service';
import { LocalStorageService } from './local-storage.service';
import { IUser } from './app/interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userApiService: UserApiService = inject(UserApiService);
  messageService: MessageService = inject(MessageService);
  loaderService: LoaderService = inject(LoaderService);
  localStorageService: LocalStorageService = inject(LocalStorageService)
  
  private usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
 
  users$: Observable<IUser[]> = this.usersSubject.asObservable();

  setUsers(users: IUser[]): void {
    this.usersSubject.next(users);
    this.localStorageService.setValue('users', users);
  }

  getUsers(): IUser[] {
    return this.usersSubject.value;
  }

  loadUsers(): Observable<IUser[]> {
    const localData: IUser[] | null = this.localStorageService.getValue<IUser[]>('users');
    if (localData) {
      return of(localData);
    }
    this.loaderService.showLoader();
    return this.userApiService.getUsers()
      .pipe(
        catchError(() => {
          this.messageService.showError('Ошибка загрузки пользователей');
          return of([]);
        }),
        finalize(() => this.loaderService.hideLoader())
      );
  }

}