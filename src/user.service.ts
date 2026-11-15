import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap, catchError, finalize, of, defer } from 'rxjs';
import { IUser } from './interfaces/IUser';
import { UserApiService } from './user-api.service';
import { LoaderService } from './loader.service';
import { ToastService } from './app/toast.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private userApiService: UserApiService = inject(UserApiService);
  private loaderService: LoaderService = inject(LoaderService);
  private toastService: ToastService = inject(ToastService);

  private usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);

  setUsers(users: IUser[]): void {
    this.usersSubject.next(users);
  }

  getUsers(): Observable<IUser[]> {
    return this.usersSubject.asObservable();
  }

  loadUsers(): Observable<IUser[]> {
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

}

