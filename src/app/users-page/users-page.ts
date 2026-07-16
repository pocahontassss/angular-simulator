import { Component, inject } from '@angular/core';
import { UserService } from '../services/user-service';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IUser } from '../../interfaces/IUser';
import { UserCard } from './user-card/user-card';
import { UserCreate } from './user-create/user-create';
import { UserFilter } from './user-filter/user-filter';

@Component({
  selector: 'app-users-page',
  imports: [AsyncPipe, UserCard, UserCreate, UserFilter],
  templateUrl: './users-page.html',
  styleUrl: './users-page.scss',
})
export class UsersPage {
  
  private userService: UserService = inject(UserService);
  
  public readonly user$: Observable<IUser[]> = this.userService.user$;
  
  private readonly filterSubject = new BehaviorSubject<string>('');
  
  public readonly filteredUsers$: Observable<IUser[]> = combineLatest([
    this.user$,
    this.filterSubject,
  ]).pipe(
    map(([users, filterValue]) => {
      return users.filter(user =>
        user.name.toLowerCase().includes(filterValue)
      );
    }),
  );
  
  ngOnInit(): void {
    this.userService.loadUsers().subscribe();
  }
  
  onDeleteUser(id: number): void {
    this.userService.deleteUser(id);
  }
  
  onCreateUser(user: IUser): void {
    this.userService.addUser(user)
  }
  
  onFilterChange(value: string): void {
    this.filterSubject.next(value)
  }
}
