import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, finalize, of, tap } from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import { UserApiService } from './user-api.service';
import { LoaderService } from './loader.service';
import { MessageService } from './message.service';
import { StorageService } from '../../interfaces/localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly STORAGE_KEY = 'users';

  private _users$ = new BehaviorSubject<IUser[]>([]);

  constructor(
    private userApiService: UserApiService,
    private loaderService: LoaderService,
    private messageService: MessageService,
    private storageService: StorageService
  ) { }

  public setUsers(users: IUser[]): void {
    this._users$.next(users);
    this.storageService.setItem<IUser[]>(this.STORAGE_KEY, users);
  }

  public getUsers(): Observable<IUser[]> {
    return this._users$.asObservable();
  }

  public deleteUser(id: number): void {
    const updatedUsers = this._users$.value.filter(user => user.id !== id);
    this.setUsers(updatedUsers);
  }

  public addUser(user: IUser): void {
    const addedUsers = [user, ...this._users$.value];
    this.setUsers(addedUsers);
  }

  public loadUsers(): Observable<IUser[]> {
    const storedUsers = this.storageService.getItem<IUser[]>(this.STORAGE_KEY);

    if (storedUsers && storedUsers.length > 0) {
      this.setUsers(storedUsers);
      return of(storedUsers);
    }

    this.loaderService.showLoader();

    return this.userApiService.getUsers().pipe(
      tap((users) => this.setUsers(users)),
      catchError(() => {
        this.messageService.showError('Не удалось загрузить пользователей');
        this.setUsers([]);
        return of([]);
      }),
      finalize(() => this.loaderService.hideLoader())
    );
  }
}