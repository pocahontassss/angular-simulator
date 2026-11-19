import { Pipe, PipeTransform } from '@angular/core';

const LAST_DIGIT_DIVISOR: number = 10;
const LAST_TWO_DIGITS_DIVISOR: number = 100;
const TEENS_MIN: number = 11;
const TEENS_MAX: number = 14;
const ONE_DIGIT: number = 1;
const FEW_MIN_DIGIT: number = 2;
const FEW_MAX_DIGIT: number = 4;

@Pipe({
  name: 'plural',
})
export class PluralPipe implements PipeTransform {

  transform(value: number | string, one: string, few: string, many: string): string {
    const count: number = Number(value);
    if (Number.isNaN(count)) {
      return many;
    }
    const lastDigit: number = Math.abs(count) % LAST_DIGIT_DIVISOR;
    const lastTwoDigits: number = Math.abs(count) % LAST_TWO_DIGITS_DIVISOR;
    if (lastTwoDigits >= TEENS_MIN && lastTwoDigits <= TEENS_MAX) {
      return many;
    }
    if (lastDigit === ONE_DIGIT) {
      return one;
    }
    if (lastDigit >= FEW_MIN_DIGIT && lastDigit <= FEW_MAX_DIGIT) {
      return few;
    }
    return many;
  }

}
