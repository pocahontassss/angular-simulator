import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../../interfaces/IUser';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  
  @Input({ required: true }) user!: IUser;
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
  
  onDelete(): void {
    this.deleteUser.emit(this.user.id);
  }
}
