import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../app/interfaces/IUser';
import { UpperCasePipe } from '@angular/common';
import { PhonePipe } from '../pipe/phone.pipe';
import { BoldOnHoverDirective } from '../directives/bold-on-hover.directive';
import { GradientBorderDirective } from '../directives/gradient-border.directive';
@Component({
  selector: 'app-user-card',
  imports: [UpperCasePipe, PhonePipe, BoldOnHoverDirective, GradientBorderDirective],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})

export class UserCardComponent {

  @Input({ required: true }) user!: IUser;
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();

  onDelete(): void {
    this.deleteUser.emit(this.user.id);
  }

}
