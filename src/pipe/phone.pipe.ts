import { Pipe, PipeTransform } from '@angular/core';

type PhoneMode = 'compact' | 'international' | 'national' | 'masked';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {

  private countryCodeEnd: number = 2;
  private operatorCodeEnd: number = 5;
  private firstGroupEnd: number = 8;
  private secondGroupEnd: number = 10;
  private plusSign: string = '+';
  private space: string = ' ';
  private maskSymbol: string = '*';

  transform(value: string, mode: PhoneMode): string {
    const digits: string = value.replace(/\D/g, '');
    const countryCode: string = digits.slice(0, this.countryCodeEnd);
    const operatorCode: string = digits.slice(this.countryCodeEnd, this.operatorCodeEnd);
    const firstGroup: string = digits.slice(this.operatorCodeEnd, this.firstGroupEnd);
    const secondGroup: string = digits.slice(this.firstGroupEnd, this.secondGroupEnd);
    const thirdGroup: string = digits.slice(this.secondGroupEnd);
    const maskedFirstGroup: string = this.maskSymbol.repeat(firstGroup.length);
    const maskedSecondGroup: string = this.maskSymbol.repeat(secondGroup.length);
    switch (mode) {
      case 'compact':
        return this.plusSign + digits;
      case 'international':
        return this.plusSign + [countryCode, operatorCode, firstGroup, secondGroup, thirdGroup].join(this.space);
      case 'national':
        return [operatorCode, firstGroup, secondGroup, thirdGroup].join(this.space);
      case 'masked':
        return this.plusSign + [countryCode, operatorCode, maskedFirstGroup, maskedSecondGroup, thirdGroup].join(this.space);
    }
  }

}
