import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, finalize, of, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../interfaces/IUser';
import { UserApiService } from './user-api.service';
import { LoaderService } from './loader.service';
import { MessageService } from './message.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private userApiService: UserApiService = inject(UserApiService);
  private loaderService: LoaderService = inject(LoaderService);
  private messageService: MessageService = inject(MessageService);
  private localStorageService: LocalStorageService = inject(LocalStorageService);
  private readonly USERS_KEY: string = 'users';

  private usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  users$: Observable<IUser[]> = this.usersSubject.asObservable();

  setUsers(users: IUser[]): void {
    this.usersSubject.next(users);
    this.localStorageService.setItem(this.USERS_KEY, users);
  }

  getUsers(): IUser[] {
    return this.usersSubject.getValue();
  }

  loadUsers(): Observable<IUser[]> {
    const cachedUsers: IUser[] | null = this.localStorageService.getItem<IUser[]>(this.USERS_KEY);

    if (cachedUsers && cachedUsers.length > 0) {
      return of(cachedUsers);
    }

    this.loaderService.showLoader();
    return this.userApiService.getUsers().pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage: string = `Ошибка ${ error.status }: Не удалось загрузить данные`;
        this.messageService.showError(errorMessage);
        return of([]);
      }),
      finalize(() => this.loaderService.hideLoader()),
    );
  }

  deleteUserById(id: number): void {
    const currentUsers: IUser[] = this.getUsers();
    const updatedUsers: IUser[] = currentUsers.filter((u: IUser) => u.id !== id);
    this.setUsers(updatedUsers);
  }

  addUser(user: IUser): void {
    const foundUser: IUser | undefined = this.getUsers().find((u: IUser) => u.email === user.email);

    if (foundUser) {
      this.messageService.showWarn(`Пользователь с таким ${ user.email } уже существует`);
      return;
    } else {
      const currentUsers: IUser[] = this.getUsers();
      const updatedUsers: IUser[] = [...currentUsers, user];
      this.setUsers(updatedUsers);
      this.messageService.showSuccess('Пользователь создан успешно');
    }
  }

}
