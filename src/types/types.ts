import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from '../interfaces/interfaces';

export type FormControls<T> = {
  [K in keyof T]: T[K] extends object ? FormGroup<FormControls<T[K]>> : FormControl<T[K]>;
};

export type UserFormValue = Omit<IUser, 'id'>;
