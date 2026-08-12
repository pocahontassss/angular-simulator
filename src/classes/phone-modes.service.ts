import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PhoneMode } from '../enums/PhoneMode';
import { IPhoneMode } from '../interfaces/IPhoneMode';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PhoneModesService {

  private localStorageService: LocalStorageService = inject(LocalStorageService);

  private modePhonSubject: BehaviorSubject<PhoneMode> = new BehaviorSubject<PhoneMode>(PhoneMode.INTERNATIONAL);
  modePhone$: Observable<PhoneMode> = this.modePhonSubject.asObservable();

    options: IPhoneMode[] = [
      {
        name: 'COMPACT',
        value: PhoneMode.COMPACT,
      },
      {
        name: 'INTERNATIONAL',
        value: PhoneMode.INTERNATIONAL,
      },
      {
        name: 'NATIONAL',
        value: PhoneMode.NATIONAL,
      },
      {
        name: 'MASKED',
        value: PhoneMode.MASKED,
      }
    ];

    setModePhone(value: PhoneMode): void{
      this.modePhonSubject.next(value);
      this.localStorageService.setItem('modePhone', value);
    }

}
