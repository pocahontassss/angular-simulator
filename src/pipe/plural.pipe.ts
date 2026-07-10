import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural',
  pure: true,
  standalone: true
})
export class PluralPipe implements PipeTransform {

  transform(value: number | string, singular: string, few: string, many: string): string {
    const count: number = typeof value === 'string' ? Number(value) : value;
    if (Number.isNaN(count)) {
      return '';
    }

    const lastTwoDigits: number = count % 100;
    const lastDigit: number = count % 10;
    const isFewForm: boolean = [2, 3, 4].includes(lastDigit);

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return `${ count } ${ many }`;
    }
    if (lastDigit === 1) {
      return `${ count } ${ singular }`;
    }
    if (isFewForm) {
      return `${ count } ${ few }`;
    }
    return `${ count } ${ many}`;
  }
  
}