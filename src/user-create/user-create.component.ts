import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IUser } from '../app/interfaces/IUser';

type UserFormValue = Omit<IUser, 'id'>;

type ControlsOf<T> = {
  [K in keyof T]: T[K] extends object ? FormGroup<ControlsOf<T[K]>> : FormControl<T[K]>;
};

type UserFormControls = ControlsOf<UserFormValue>;

@Component({
  selector: 'app-user-create',
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})

export class UserCreateComponent {

  private formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  @Output() createUser: EventEmitter<IUser> = new EventEmitter<IUser>();

  userForm: FormGroup<UserFormControls> = this.formBuilder.group<UserFormControls>({
    name: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    username: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
    ]),
    phone: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(25),
    ]),
    website: this.formBuilder.control('', [Validators.maxLength(100)]),
    address: this.formBuilder.group({
      street: this.formBuilder.control('', [Validators.required, Validators.maxLength(100)]),
      suite: this.formBuilder.control('', [Validators.maxLength(50)]),
      city: this.formBuilder.control('', [Validators.required, Validators.maxLength(50)]),
      zipcode: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
      geo: this.formBuilder.group({
        lat: this.formBuilder.control('', [Validators.required]),
        lng: this.formBuilder.control('', [Validators.required]),
      }),
    }),
    company: this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.maxLength(50)]),
      catchPhrase: this.formBuilder.control('', [Validators.maxLength(200)]),
      bs: this.formBuilder.control('', [Validators.maxLength(100)]),
    }),
  });

  onSubmit(): void {
    const newUser: IUser = {
      ...this.userForm.getRawValue(),
      id: Date.now(),
    };

    this.createUser.emit(newUser);
    this.userForm.reset();
  }

}
