import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, combineLatest, Observable, map } from 'rxjs';
import { IUser } from '../../../interfaces/IUser';
import { UserService } from '../../services/user.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { UserCreateComponent } from '../../components/user-create/user-create.component';
import { UsersFilterComponent } from '../../components/users-filter/users-filter.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AsyncPipe, UserCardComponent, UserCreateComponent, UsersFilterComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UsersComponent implements OnInit {
  public users$: Observable<IUser[]>;

  private _searchTerm$ = new BehaviorSubject<string>('');

  public filteredUsers$: Observable<IUser[]>;

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();

    this.filteredUsers$ = combineLatest([this.users$, this._searchTerm$]).pipe(
      map(([users, searchTerm]) => {
        if (!searchTerm) {
          return users;
        } else {
          return users.filter(user => user.name.toLowerCase().includes(searchTerm));
        }
      })
    );
  }

  public ngOnInit(): void {
    this.userService.loadUsers().subscribe();
  }

  public onDeleteUser(id: number): void {
    this.userService.deleteUser(id);
  }

  public onCreateUser(user: IUser): void {
    this.userService.addUser(user);
  }

  public onFilterChange(searchTerm: string) {
    this._searchTerm$.next(searchTerm);
  }
}