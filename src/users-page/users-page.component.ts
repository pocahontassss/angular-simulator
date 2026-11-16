import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-users-page',
  imports: [AsyncPipe],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent implements OnInit {

  private userService: UserService = inject(UserService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  users$: Observable<IUser[]> = this.userService.getUsers();

  ngOnInit(): void {
    this.userService.loadUsers()
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

}

