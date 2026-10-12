import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../../interfaces/IUser';
import { required } from '@angular/forms/signals';
import { UpperCasePipe } from '@angular/common';
import { PhonePipe } from '../../pipes/phone.pipe';
import { HoverDirective } from '../../hover.directive';
import { GradientBorderDirective } from '../../gradient-border.directive';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [UpperCasePipe, PhonePipe, HoverDirective, GradientBorderDirective],
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
