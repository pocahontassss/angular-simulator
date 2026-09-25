import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../../interfaces/IUser';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input({ required: true }) user!: IUser;
  @Output() deleteUser = new EventEmitter<number>();

  public onDeleteUser() {
    this.deleteUser.emit(this.user.id);
  }
}
