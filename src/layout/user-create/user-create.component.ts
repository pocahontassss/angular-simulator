import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControls } from '../../types/types';

import { IUser } from '../../interfaces/interfaces';
import { UserFormValue } from '../../types/types';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {
  private fb = inject(FormBuilder).nonNullable;

  @Output() createUser: EventEmitter<IUser> = new EventEmitter<IUser>();

  userForm = this.fb.group<FormControls<UserFormValue>>({
    name: this.fb.control('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),

    username: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
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

  submit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const formValue = this.userForm.getRawValue();

    const user: IUser = {
      id: Date.now(),

      name: formValue.name.trim(),
      username: formValue.username.trim(),
      email: formValue.email.trim(),

      phone: formValue.phone!.trim(),
      website: formValue.website?.trim() || 'Неизвестно',

      address: {
        street: formValue.address.street!.trim(),
        suite: formValue.address.suite?.trim() || 'Неизвестно',
        city: formValue.address.city!.trim(),
        zipcode: formValue.address.zipcode!.trim(),

        geo: {
          lat: formValue.address.geo.lat!.trim(),
          lng: formValue.address.geo.lng!.trim(),
        },
      },

      company: {
        name: formValue.company.name!.trim(),
        catchPhrase: formValue.company.catchPhrase?.trim() || 'Неизвестно',
        bs: formValue.company.bs?.trim() || 'Неизвестно',
      },
    };

    this.createUser.emit(user);

    this.userForm.reset();
  }
}
