import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural',
})
export class PluralPipe implements PipeTransform {

  private lastDigitDivisor: number = 10;
  private lastTwoDigitsDivisor: number = 100;
  private teensMin: number = 11;
  private teensMax: number = 14;
  private oneDigit: number = 1;
  private fewMinDigit: number = 2;
  private fewMaxDigit: number = 4;

  transform(value: number | string, one: string, few: string, many: string): string {
    const count: number = Number(value);
    if (Number.isNaN(count)) {
      return many;
    }
    const lastDigit: number = Math.abs(count) % this.lastDigitDivisor;
    const lastTwoDigits: number = Math.abs(count) % this.lastTwoDigitsDivisor;
    if (lastTwoDigits >= this.teensMin && lastTwoDigits <= this.teensMax) {
      return many;
    }
    if (lastDigit === this.oneDigit) {
      return one;
    }
    if (lastDigit >= this.fewMinDigit && lastDigit <= this.fewMaxDigit) {
      return few;
    }
    return many;
  }

}
