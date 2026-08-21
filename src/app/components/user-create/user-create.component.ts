import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormControl, FormsModule, NgForm, ReactiveFormsModule, } from '@angular/forms';
import { IUser } from '../../interfaces/IUser';
import { IUserForm, IAddressForm, ICompanyForm, IGeoForm } from '../../interfaces/IUserForm';

@Component({
  selector: 'app-user-create',
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {

  @Output() create: EventEmitter<IUser> = new EventEmitter<IUser>();
  
  userForm: FormGroup<IUserForm> = new FormGroup<IUserForm>({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(25)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(25)]),
    website: new FormControl('', [Validators.maxLength(100)]),
  
    address: new FormGroup<IAddressForm>({
      city: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      street: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      suite: new FormControl('', [Validators.maxLength(50)]),
      zipcode: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      geo: new FormGroup<IGeoForm>({
        lat: new FormControl('', [Validators.required]),
        lng: new FormControl('', [Validators.required]),
      })
    }),

    company: new FormGroup<ICompanyForm>({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      catchPhrase: new FormControl('', [Validators.maxLength(200)]),
      bs: new FormControl('', [Validators.maxLength(100)]),
    })
  });
  
  onSubmit(): void {
    if (this.userForm.valid) {
        const newUser: IUser = {id: Date.now(),...this.userForm.value} as IUser;
        this.create.emit(newUser);
        this.userForm.reset();
      }
  }
}
