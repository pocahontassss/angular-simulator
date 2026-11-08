import { Component, inject, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { AsyncPipe } from '@angular/common';
import { NgTemplateOutlet } from '@angular/common';
import { Subscription, tap } from 'rxjs';


@Component({
  selector: 'app-users-page',
  imports: [AsyncPipe, NgTemplateOutlet],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {

  user: UserService = inject(UserService);

  constructor() {
    this.user.loadUsers();
  }

}
