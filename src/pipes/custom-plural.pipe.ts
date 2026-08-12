import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPlural',
  standalone: true,
  pure: true,
})
export class CustomPluralPipe implements PipeTransform {

  transform(value: number, one: string, few: string, many: string): string {
    const lastDigit: number = value % 10;

    if (value === 1 && lastDigit === 1) {
      return `${ value } ${ one }`;
    }
    if ((value >= 2 && value <= 4) && lastDigit >= 2 && lastDigit <= 4) {
      return `${ value } ${ few }`;
    }
    return `${ value } ${ many }`;
  }

}
