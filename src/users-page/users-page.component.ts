import { Component, inject } from '@angular/core';
import { IUser } from '../interfaces';
import { BehaviorSubject, combineLatest, map, Observable, startWith, tap } from 'rxjs';
import { UserService } from '../service/user.service';
import { AsyncPipe } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UsersFilterComponent } from '../users-filter/users-filter.component';
import { PluralPipe } from '../pipe/plural.pipe';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [AsyncPipe, UserCardComponent, CreateUserComponent, UsersFilterComponent, PluralPipe],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {
  
  userService: UserService = inject(UserService);
  users$: Observable<IUser[]> = this.userService.users$;

  filterQuerySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  filteredUsers$: Observable<IUser[]> = combineLatest([
    this.users$,
    this.filterQuerySubject.asObservable()
    ]).pipe(
      map(([users, query]: [IUser[], string]): IUser[] => {
      const trimmedQuery: string = query.trim();
      if (!trimmedQuery) {
        return users;
      }  
      return users.filter((user: IUser) =>
      user.name?.toLowerCase().includes(trimmedQuery.toLowerCase()) ?? false
      );
    })
  );
  
  usersCount$: Observable<number> = this.filteredUsers$.pipe(
    map((users: IUser[]) => users.length),
    startWith(0)
  );

  ngOnInit(): void {
    this.userService.loadUsers()
      .pipe(
        tap((users: IUser[]) => this.userService.setUsers(users)))
      .subscribe();
  }

  onDeleteUser(user: IUser): void {
    this.userService.deleteUser(user);
  }

  onCreateUser(user: IUser): void {
    this.userService.addUser(user);
  }

  onFilterChange(query: string): void {
    this.filterQuerySubject.next(query);
  }

}
