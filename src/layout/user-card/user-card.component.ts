import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/interfaces';

@Component({
  selector: 'app-user-card-component',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  
  @Input({ required: true }) user!: IUser;
  @Output() clickedById: EventEmitter<number> = new EventEmitter();

  delete(id: number): void {
    this.clickedById.emit(id);
  }

}
