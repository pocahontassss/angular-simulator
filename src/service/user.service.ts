import { inject, Injectable } from "@angular/core";
import { LoaderService } from "./loader.service";
import { ToastService } from "./toast.service";
import { UserApiService } from "./user-api.service";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { IUser } from "../interfaces";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  loaderService: LoaderService = inject(LoaderService);
  toastService: ToastService = inject(ToastService);
  userApi: UserApiService = inject(UserApiService);
  localStorageService: LocalStorageService = inject(LocalStorageService);

  private usersSubject: BehaviorSubject<IUser[]>= new BehaviorSubject<IUser[]>([]);
  users$: Observable<IUser[]> =this.usersSubject.asObservable();

  setUsers(users: IUser[]): void {
    this.usersSubject.next(users);
    this.localStorageService.saveData('users', users);
  }

  getUsers(): IUser[] {
    return this.usersSubject.getValue();
  }

  addUser(user: IUser): void {
    const users: IUser[] = this.getUsers();
    this.setUsers([...users, user]);
  }

   deleteUser(user: IUser): void {
    const currentUsers: IUser[] = this.getUsers().filter((u: IUser) => u.id !== user.id);
    this.setUsers(currentUsers);
  }

  loadUsers(): Observable<IUser[]> {
    const usersFromStorage: IUser[] = this.localStorageService.getItem<IUser[]>('users') ?? [];
    if (usersFromStorage.length) {
      return of(usersFromStorage);
    }
    this.loaderService.showLoader();
    return this.userApi.getUsers()
    .pipe(
      catchError(() => {
        this.toastService.showError('Не удалось загрузить пользователей');
        return of([]);
      }),
      finalize(() => this.loaderService.hideLoader()),
    );
  }

}