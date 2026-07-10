import { FormGroup, FormControl } from '@angular/forms';

export type FormControls<T> = {
  [K in keyof T]: T[K] extends object
    ? FormGroup<FormControls<NonNullable<T[K]>>>
    : FormControl<T[K]>;
};