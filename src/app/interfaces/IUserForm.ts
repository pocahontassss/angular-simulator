import { FormControl, FormGroup } from "@angular/forms";

export interface IGeoForm {
  lat: FormControl<string | null>;
  lng: FormControl<string | null>;
}

export interface ICompanyForm {
  name: FormControl<string | null>;
  catchPhrase: FormControl<string | null>;
  bs: FormControl<string | null>;
}

export interface IAddressForm {
  city: FormControl<string | null>;
  street: FormControl<string | null>;
  suite: FormControl<string | null>;
  zipcode: FormControl<string | null>;
  geo: FormGroup<IGeoForm>;
}

export interface IUserForm {
  name: FormControl<string | null>;
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  website: FormControl<string | null>;
  address: FormGroup<IAddressForm>;
  company: FormGroup<ICompanyForm>;
}