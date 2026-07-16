import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../../interfaces/IUser';

@Component({
  selector: 'app-user-create',
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.html',
  styleUrl: './user-create.scss',
})
export class UserCreate {
  
  @Output()
  public readonly createUser = new EventEmitter<IUser>();
  
  public readonly userForm = new  FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100)
    ]
  }),
    username: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ]
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(25)
      ]
    }),
    website: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.maxLength(100)
      ]
    }),
    address: new FormGroup({
      city: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.maxLength(50)
        ]
      }),
      street: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.maxLength(100)
        ]
      }),
      suite: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.maxLength(50)
        ]
      }),
      zipcode: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10)
        ]
      }),
      geo: new FormGroup({
        lat: new FormControl('', {
          nonNullable: true,
          validators: [
            Validators.required
          ]
        }),
        lng: new FormControl('', {
          nonNullable: true,
          validators: [
            Validators.required
          ]
        })
      })
    }),
    company: new FormGroup({
      name: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.maxLength(50)
        ]
      }),
      catchPhrase: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.maxLength(200)
        ]
      }),
      bs: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.maxLength(100)
        ]
      })
    })
    
  })

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    
    const formValue = this.userForm.getRawValue();
    
    const newUser: IUser = {
      id: Date.now(),
      ...formValue
    }
    
    this.createUser.emit(newUser);
    this.userForm.reset();
  }
}
