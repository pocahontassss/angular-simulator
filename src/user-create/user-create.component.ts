import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss'
})
export class UserCreateComponent {

  @Output() createUser: EventEmitter<IUser> = new EventEmitter<IUser>();

  userForm: FormGroup<{
    name: FormControl<string>;
    username: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
    website: FormControl<string>;
    address: FormGroup<{
      city: FormControl<string>;
      street: FormControl<string>;
      suite: FormControl<string>;
      zipcode: FormControl<string>;
      geo: FormGroup<{
        lat: FormControl<string>;
        lng: FormControl<string>;
      }>;
    }>;
    company: FormGroup<{
      name: FormControl<string>;
      catchPhrase: FormControl<string>;
      bs: FormControl<string>;
    }>;
  }> = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
    }),
    username: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email, Validators.maxLength(100)]
    }),
    phone: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10), Validators.maxLength(25)]
    }),
    website: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.maxLength(100)]
    }),
    address: new FormGroup({
      city: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(50)]
      }),
      street: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(100)]
      }),
      suite: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.maxLength(50)]
      }),
      zipcode: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(10)]
      }),
      geo: new FormGroup({
        lat: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required]
        }),
        lng: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required]
        })
      })
    }),
    company: new FormGroup({
      name: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(50)]
      }),
      catchPhrase: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.maxLength(200)]
      }),
      bs: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.maxLength(100)]
      })
    })
  });

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }

    const newUser: IUser = {
      id: Date.now(),
      ...this.userForm.getRawValue()
    };

    this.createUser.emit(newUser);
    this.userForm.reset();
  }

}
