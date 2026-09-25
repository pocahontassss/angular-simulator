import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { IUser } from '../../../interfaces/IUser';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {
  @Output() createUser = new EventEmitter<IUser>();

  userForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    phone: new FormControl(''),
    website: new FormControl(''),

    address: new FormGroup({
      city: new FormControl(''),
      street: new FormControl(''),
      suite: new FormControl(''),
      zipcode: new FormControl(''),
      geo: new FormGroup({
        lat: new FormControl(''),
        lng: new FormControl(''),
      })
    }),

    company: new FormGroup({
      name: new FormControl(''),
      catchPhrase: new FormControl(''),
      bs: new FormControl('')
    })
  });

  public onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }
    const newCreatedUser: IUser = {
      id: Date.now(),
      ...this.userForm.value
    } as IUser;
    this.createUser.emit(newCreatedUser);
    this.userForm.reset();
  }
}
