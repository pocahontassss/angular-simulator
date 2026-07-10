import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../interfaces';
import { PhonePipe } from '../pipe/phone.pipe';
import { PhoneFormat } from '../enums/PhoneFormat';
import { AnimatedGradientDirective } from '../directive/gradient-border.directive';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, PhonePipe, AnimatedGradientDirective],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input({ required: true }) user!: IUser;
  @Output() deleteUser: EventEmitter<IUser> = new EventEmitter<IUser>();
  
  phoneFormat: typeof PhoneFormat = PhoneFormat;

  onDeleteUser(): void {
    this.deleteUser.emit(this.user);
  }

}
