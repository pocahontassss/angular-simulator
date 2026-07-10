import { Pipe, PipeTransform } from '@angular/core';
import { PhoneFormat } from '../enums/PhoneFormat';

@Pipe({
  name: 'phone',
  standalone: true,
})
export class PhonePipe implements PipeTransform {

  transform(value: string, mode: PhoneFormat): string {
    if (!value) return '';
    const digits: string = value.replace(/\D/g, '');
    if (digits.length < 12) return digits;

    const countryCode: string = digits.slice(0, 2);
    const operatorCode: string = digits.slice(2, 5);
    const firstGroup: string = digits.slice(5, 8);
    const secondGroup: string = digits.slice(8, 10);
    const lastTwoDigits: string = digits.slice(10, 12);

    switch (mode) {
      case PhoneFormat.COMPACT:
        return `+${ digits }`;
      case PhoneFormat.INTERNATIONAL:
        return `+${ countryCode } ${ operatorCode } ${ firstGroup } ${ secondGroup } ${ lastTwoDigits }`;
      case PhoneFormat.NATIONAL:
        return `${ operatorCode } ${ firstGroup } ${ secondGroup } ${ lastTwoDigits }`;
      case PhoneFormat.MASKED:
        return `+${ countryCode } ${ operatorCode } *** ** ${ lastTwoDigits }`;
      default:
        return digits;
    }
  }

}
