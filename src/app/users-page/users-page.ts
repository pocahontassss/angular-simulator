import { Component, inject } from '@angular/core';
import { UserService } from '../services/user-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-users-page',
  imports: [AsyncPipe],
  templateUrl: './users-page.html',
  styleUrl: './users-page.scss',
})
export class UsersPage {
  
  private userService: UserService = inject(UserService);
  
  public readonly user$: Observable<IUser[]> = this.userService.user$;
  
  ngOnInit(): void {
    this.userService.loadUsers().subscribe();
  }
}
