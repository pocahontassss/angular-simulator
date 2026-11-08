import { inject, Injectable } from '@angular/core';
import { IUser } from '../../interfaces/interfaces';
import { BehaviorSubject, catchError, finalize, Observable, of, tap } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { UserApiService } from '../user-api/user-api.service';
import { MessagesService } from '../messages/messages.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  loaderService: LoaderService = inject(LoaderService);

  userApiService: UserApiService = inject(UserApiService);

  messagesService: MessagesService = inject(MessagesService);

  localStorageService: LocalStorageService = inject(LocalStorageService);

  usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);

  setUsers(users: IUser[]): void {
    this.usersSubject.next(users);
  }

  getUsers(): Observable<IUser[]> {
    return this.usersSubject.asObservable();
  }

  loadUsers(): Observable<IUser[]> {
    const users: IUser[] | null = this.localStorageService.getItem('users');

    if (users) {
      this.setUsers(users);
      return of(users);
    }

    this.loaderService.showLoader();

    return this.userApiService.getUsers().pipe(
      tap((users) => {
        this.setUsers(users);
        this.messagesService.showSuccess('Пользователи успешно загружены');
        this.localStorageService.setItem('users', users);
      }),
      catchError(() => {
        this.messagesService.showError('Не удалось загрузить пользователей');
        this.setUsers([]);
        return of([]);
      }),
      finalize(() => this.loaderService.hideLoader()),
    );
  }

  addUser(user: IUser): void {
    const users: IUser[] = this.usersSubject.value;
    this.setUsers([...users, user]);
    this.localStorageService.setItem('users', [...users, user]);
  }

  deleteUser(id: number): void {
    const users = this.usersSubject.value;
    const filteredUsers = users.filter((user) => user.id !== id);
    this.setUsers(filteredUsers);

    if (filteredUsers.length === 0) {
      this.localStorageService.removeItemByKey('users');
    } else {
      this.localStorageService.setItem('users', filteredUsers);
    }
  }

  deleteAllUsers(): void {
    this.setUsers([]);
    this.localStorageService.removeItemByKey('users');
  }

}
