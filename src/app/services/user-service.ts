import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, Observable, of, tap } from 'rxjs';
import { LoaderService } from './loader-service';
import { UserApiService } from './user-api-service';
import { ShowMessageService } from './show-message-service';
import { IUser } from '../../interfaces/IUser';
import { LocalStorageService } from './local-storage-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private loadService: LoaderService = inject(LoaderService);
  private userApiService: UserApiService = inject(UserApiService);
  private showMessageService: ShowMessageService = inject(ShowMessageService);
  private localStorageService: LocalStorageService = inject(LocalStorageService)
  
  private userSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  public readonly user$: Observable<IUser[]> = this.userSubject.asObservable();
  
  private readonly usersStorageKey: string = 'users';
  
  setUsers(users: IUser[]) {
    this.userSubject.next(users);
    this.localStorageService.setValue(this.usersStorageKey, users);
  }
  
  getUsers(): IUser[] {
    return this.userSubject.getValue();
  }
  
  loadUsers(): Observable<IUser[]> {
    
    const storedUsers = this.localStorageService.getValue<IUser[]>(this.usersStorageKey)
    
    if(storedUsers) {
      this.setUsers(storedUsers);
      return of(storedUsers);
    }
    
    this.loadService.showLoader();

    return this.userApiService.getUsers()
      .pipe(
        tap((users: IUser[]) => {
          this.setUsers(users);
        }),
        catchError((err) => {
          const errorMessage = err.error?.message || err.message || 'Произошла неизвестная ошибка';
          
          this.showMessageService.showError(errorMessage);
          return of([]);
          
        }),
        finalize(() => this.loadService.hideLoader())
      )
  }
  
  deleteUser(id: number): void {
    this.setUsers(this.getUsers().filter(user => user.id !== id ));
  }
  
  addUser(user: IUser) {
    this.setUsers([...this.getUsers(), user]);
  }
}
