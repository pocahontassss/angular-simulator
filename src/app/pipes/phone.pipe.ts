import { Pipe, PipeTransform } from '@angular/core';

export type PhoneMode = 'compact' | 'international' | 'national' | 'masked';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {

  transform(value: string | null | undefined, mode: PhoneMode = 'international'): string {
    if (!value) {
      return '';
    }
    const digits = value.replace(/\D/g, '');

    if (digits?.length !== 12) {
      return value;
    }

    const country = digits.slice(0, 2);
    const operator = digits.slice(2, 5);
    const part1 = digits.slice(5, 8);
    const part2 = digits.slice(8, 10);
    const part3 = digits.slice(10, 12)

    if (mode === 'compact') {
      return '+' + digits;
    } else if (mode === 'international') {
      return '+' + country + ' ' + operator + ' ' + part1 + part2 + part3;
    } else if (mode === 'national') {
      return operator + part1 + part2 + part3;
    } else if (mode == 'masked') {
      return '+' + country + operator + '***' + '**' + part3;
    }

    return '+' + country + ' ' + operator + ' ' + part1 + ' ' + part2 + ' ' + part3;
  }

}
