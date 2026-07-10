import { Component, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IUser } from '../interfaces';
import { FormControls } from '../types/form-controls';
import { AnimatedGradientDirective } from '../directive/gradient-border.directive';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AnimatedGradientDirective],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {

  @Output() createUser: EventEmitter<IUser> = new EventEmitter<IUser>();
  private fb: FormBuilder = inject(FormBuilder);

  userForm: FormGroup<FormControls<IUser>> = this.fb.nonNullable.group({
    id: [Date.now()],
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(25)]],
    website: ['', [Validators.maxLength(100)]],
    address: this.fb.nonNullable.group({
      city: ['', [Validators.maxLength(50)]],
      street: ['', [Validators.maxLength(100)]],
      suite: ['', [Validators.maxLength(50)]],
      zipcode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      geo: this.fb.nonNullable.group({
        lat: ['', [Validators.required]],
        lng: ['', [Validators.required]],
      }),
    }),
    company: this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      catchPhrase: ['', [Validators.maxLength(200)]],
      bs: ['', [Validators.maxLength(100)]],
    }),
  });

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }
    const formValue: IUser = this.userForm.value as IUser; 
    this.createUser.emit({ ...formValue, id: Date.now() });
  }

}