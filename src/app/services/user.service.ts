import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of, catchError, finalize, defer, tap } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { UserApiService } from './user-api.service';
import { MessageService } from './message.service';
import { LoaderService } from './loader.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  private userApiService: UserApiService = inject(UserApiService);
  private messageService: MessageService = inject(MessageService);
  private loaderService: LoaderService = inject(LoaderService);
  private storageService: StorageService = inject(StorageService);
  private USER_STORAGE_KEY: string = 'users';
  private usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  users$: Observable<IUser[]> = this.usersSubject.asObservable();

  setUsers(users: IUser[]): void {
    this.usersSubject.next(users);
    this.storageService.setItem<IUser[]>(this.USER_STORAGE_KEY, users);
  }

  getUsers(): Observable<IUser[]> {
    return this.users$;
  }

  loadUsers(): Observable<IUser[]> {
    return defer(() => {
      const savedUsers: IUser[] | null = this.storageService.getItem<IUser[] | null>(
        this.USER_STORAGE_KEY,
      );
      if (savedUsers !== null) {
        return of(savedUsers);
      }
      this.loaderService.showLoader();
      return this.userApiService.getUsers();
    }).pipe(
      tap((users: IUser[]) => {
        this.setUsers(users);
      }),
      catchError((error: HttpErrorResponse) => {
        this.messageService.showError('Не удалось загрузить пользователей');
        return of([]);
      }),
      finalize(() => {
        this.loaderService.hideLoader();
      }),
    );
  }

  deleteUser(id: number): void {
    const users: IUser[] = this.usersSubject.value;
    const updatedUsers: IUser[] = users.filter((user: IUser) => {
      return user.id !== id;
    });
    this.setUsers(updatedUsers);
  }

  addUser(user: IUser): void {
    const users: IUser[] = this.usersSubject.value;
    const updatedUsers: IUser[] = [user, ...users];
    this.setUsers(updatedUsers);
  }

}
