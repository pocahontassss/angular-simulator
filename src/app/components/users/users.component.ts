import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, combineLatest, Observable, tap, map } from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserCreateComponent } from '../user-create/user-create.component';
import { UsersFilterComponent } from '../users-filter/users-filter.component';


@Component({
  selector: 'app-users',
  imports: [AsyncPipe, UserCardComponent, UserCreateComponent, UsersFilterComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {

  userService: UserService = inject(UserService);

  private searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  filteredUsers$: Observable<IUser[]> = combineLatest([this.userService.users$, this.searchValue$]).pipe(
    map(([users, textValue]) => {
      return users.filter(user => user.name.toLowerCase().includes(textValue))
    })
  )

  ngOnInit(): void {
    this.userService.loadUsers()
      .pipe(
        tap((data: IUser[]) => this.userService.setUsers(data))
      ).subscribe();
  }

  onDeleteUser(id: number): void {
    const currentUsers: IUser[] = this.userService.getUsers();
    const updatedUsers: IUser[] = currentUsers.filter(user => user.id !== id);
    this.userService.setUsers(updatedUsers);
  }

  onCreateUser(newUser: IUser): void {
    const currentUsers: IUser[] = this.userService.getUsers();
    const updatedUsers: IUser[] = [newUser,...currentUsers];
    this.userService.setUsers(updatedUsers);
  }

  onFilterChange(text: string): void {
    this.searchValue$.next(text);
  }

}
