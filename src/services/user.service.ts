import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap, catchError, finalize, of, defer } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { UserApiService } from './user-api.service';
import { LoaderService } from './loader.service';
import { ToastService } from '../app/toast.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  private userApiService: UserApiService = inject(UserApiService);
  private loaderService: LoaderService = inject(LoaderService);
  private toastService: ToastService = inject(ToastService);
  private usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  private storageService: StorageService = inject(StorageService);
  private readonly storageKey: string = 'users';

  setUsers(users: IUser[]): void {
    this.usersSubject.next(users);
    this.storageService.set<IUser[]>(this.storageKey, users);
  }

  getUsers(): Observable<IUser[]> {
    return this.usersSubject.asObservable();
  }

  loadUsers(): Observable<IUser[]> {
    const savedUsers: IUser[] | null = this.storageService.get<IUser[]>(this.storageKey);

    if (savedUsers && savedUsers.length > 0) {
      this.usersSubject.next(savedUsers);
      return of(savedUsers);
    }
  
    return defer(() => {
      this.loaderService.showLoader();

      return this.userApiService.getUsers()
        .pipe(
          tap((users: IUser[]) => {
            this.setUsers(users);
          }),
          catchError(() => {
            this.toastService.showError('Ошибка при загрузке пользователей');
            return of([]);
          }),
          finalize(() => {
            this.loaderService.hideLoader();
          })
        );
    });
  }

  deleteUser(id: number): void {
    const updatedUsers: IUser[] = this.usersSubject.value.filter((user: IUser) => user.id !== id);
    this.setUsers(updatedUsers);
  }

    addUser(newUser: IUser): void {
    this.setUsers([newUser, ...this.usersSubject.value]);
  }

}

