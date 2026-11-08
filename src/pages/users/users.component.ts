import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { AsyncPipe } from '@angular/common';
import { IUser } from '../../interfaces/interfaces';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { UsersFilterComponent } from '../../layout/users-filter/users-filter.component';
import { UserCreateComponent } from '../../layout/user-create/user-create.component';
import { UserCardComponent } from '../../layout/user-card/user-card.component';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe, UserCardComponent, UsersFilterComponent, UserCreateComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {

  userService: UserService = inject(UserService);
  users$: Observable<IUser[]> = this.userService.getUsers();
  private searchSubject = new BehaviorSubject<string>('');
  filteredUsers$ = combineLatest([this.users$, this.searchSubject]).pipe(
    map(([users, search]) =>
      users.filter((user: IUser) => user.name.trim().toLowerCase().includes(search)),
    ),
  );

  ngOnInit() {
    this.userService.loadUsers().subscribe();
  }

  onSearchChange(search: string): void {
    this.searchSubject.next(search);
  }

  addUser(user: IUser): void {
    this.userService.addUser(user);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
  }

  deleteAllUsers(): void {
    this.userService.deleteAllUsers();
  }
  
}
