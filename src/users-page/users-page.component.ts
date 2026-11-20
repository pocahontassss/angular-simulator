import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/IUser';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserCreateComponent } from '../user-create/user-create.component';
import { UsersFilterComponent } from '../users-filter/users-filter.component';

@Component({
  selector: 'app-users-page',
  imports: [ AsyncPipe, UserCardComponent, UserCreateComponent, UsersFilterComponent ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit {

  private userService: UserService = inject(UserService);
  private destroyRef: DestroyRef = inject(DestroyRef);
  private searchTermSubject = new BehaviorSubject<string>('');

  users$: Observable<IUser[]> = this.userService.getUsers();

  filteredUsers$: Observable<IUser[]> = combineLatest([
    this.users$,
    this.searchTermSubject
  ]).pipe(
    map(([users, searchTerm]: [IUser[], string]) => {
      const normalizedTerm: string = searchTerm.trim().toLowerCase();

      if (!normalizedTerm) {
        return users;
      }

      return users.filter((user: IUser) =>
        user.name.toLowerCase().includes(normalizedTerm)
      );
    })
  );

  ngOnInit(): void {
    this.userService.loadUsers()
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  onDeleteUser(id: number): void {
    this.userService.deleteUser(id);
  }

  onCreateUser(newUser: IUser): void {
    this.userService.addUser(newUser);
  }

  onFilterChange(searchTerm: string): void {
    this.searchTermSubject.next(searchTerm);
  }

}

