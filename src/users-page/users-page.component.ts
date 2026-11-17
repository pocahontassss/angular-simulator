import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { UserService } from '../app/services/user.service';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { IUser } from '../app/interfaces/IUser';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserCreateComponent } from '../user-create/user-create.component';
import { UsersFilterComponent } from '../users-filter/users-filter.component';

@Component({
  selector: 'app-users-page',
  imports: [AsyncPipe, UserCardComponent, UserCreateComponent, UsersFilterComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})

export class UsersPageComponent {

  private userService: UserService = inject(UserService);
  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  users$: Observable<IUser[]> = this.userService.users$;
  filteredUsers$: Observable<IUser[]> = combineLatest([this.users$, this.searchSubject]).pipe(
    map(([users, search]: [IUser[], string]) => {
      const processedSearchText: string = search.toLowerCase().trim();
      return users.filter((user: IUser) => {
        return user.name.toLowerCase().includes(processedSearchText);
      });
    }),
  );

  constructor() {
    this.userService.loadUsers().subscribe();
  }

  onDeleteUser(id: number): void {
    this.userService.deleteUser(id);
  }

  onCreateUser(user: IUser): void {
    this.userService.addUser(user);
  }

  onSearchChange(value: string): void {
    this.searchSubject.next(value);
  }

}
