import { Component, inject } from '@angular/core';
import { UserService } from '../../../user.service';
import { AsyncPipe } from '@angular/common';
import { tap } from 'rxjs';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {

  userService: UserService = inject(UserService);

  constructor() {
    this.userService.loadUsers()
      .pipe(
        tap((data: IUser[]) => this.userService.setUsers(data))
      ).subscribe();
  }

}
