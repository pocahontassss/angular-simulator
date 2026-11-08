import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { FormControls, CreateUserType } from '../../types/types';
import { IUser } from '../../interfaces/interfaces';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {

  @Output() createUser: EventEmitter<IUser> = new EventEmitter<IUser>();
  private fb: NonNullableFormBuilder = inject(FormBuilder).nonNullable;
  userForm: FormGroup<FormControls<CreateUserType>> = this.fb.group<FormControls<CreateUserType>>({
    name: this.fb.control('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
      this.noWhitespaceValidator,
    ]),

    username: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      this.noWhitespaceValidator,
    ]),

    email: this.fb.control('', [Validators.required, Validators.email, Validators.maxLength(100)]),

    phone: this.fb.control('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(25),
    ]),

    website: this.fb.control('', Validators.maxLength(100)),

    address: this.fb.group({
      street: ['', [Validators.required, Validators.maxLength(100)]],
      suite: ['', Validators.maxLength(50)],
      city: ['', [Validators.required, Validators.maxLength(50)]],
      zipcode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],

      geo: this.fb.group({
        lat: ['', Validators.required],
        lng: ['', Validators.required],
      }),
    }),

    company: this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      catchPhrase: ['', Validators.maxLength(200)],
      bs: ['', Validators.maxLength(100)],
    }),
  });

  noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    return (control.value || '').trim().length === 0 ? { whitespace: true } : null
  }

  submit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const newUser: IUser = { ...this.userForm.getRawValue(), id: Date.now() };
    this.createUser.emit(newUser);
    this.userForm.reset();
  }

}
