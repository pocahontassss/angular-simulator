import { Component, inject } from '@angular/core';
import { UserService } from '../../../user.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {

  userService: UserService = inject(UserService);

  constructor() {
    this.userService.loadUsers();
  }

}
