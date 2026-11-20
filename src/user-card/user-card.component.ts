import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {

  @Input({ required: true }) user!: IUser;
  @Output() deleteUser = new EventEmitter<number>();

  onDeleteUser(): void {
    this.deleteUser.emit(this.user.id);
  }  

}
