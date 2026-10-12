import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural',
  standalone: true
})
export class PluralPipe implements PipeTransform {

  transform(value: number | string | null | undefined, one: string, few: string, many: string): string {
    const num = Number(value)
    if (Number.isNaN(value)) {
      return many
    }
    const updatenum = Math.floor(Math.abs(num));

    const mod10 = num % 10;
    const mod100 = num % 100;

    if (mod100 >= 11 && mod100 <= 14) {
      return many;
    }
    if (mod10 === 1) {
      return one;
    }
    if (mod10 >= 2 && mod10 <= 4) {
      return few;
    }

    return many
  }

}
