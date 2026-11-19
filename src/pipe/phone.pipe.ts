import { Pipe, PipeTransform } from '@angular/core';

type PhoneMode = 'compact' | 'international' | 'national' | 'masked';

const COUNTRY_CODE_END: number = 2;
const OPERATOR_CODE_END: number = 5;
const FIRST_GROUP_END: number = 8;
const SECOND_GROUP_END: number = 10;
const PLUS_SIGN: string = '+';
const SPACE: string = ' ';
const MASK_SYMBOL: string = '*';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {

  transform(value: string, mode: PhoneMode): string {
    const digits: string = value.replace(/\D/g, '');
    const countryCode: string = digits.slice(0, COUNTRY_CODE_END);
    const operatorCode: string = digits.slice(COUNTRY_CODE_END, OPERATOR_CODE_END);
    const firstGroup: string = digits.slice(OPERATOR_CODE_END, FIRST_GROUP_END);
    const secondGroup: string = digits.slice(FIRST_GROUP_END, SECOND_GROUP_END);
    const thirdGroup: string = digits.slice(SECOND_GROUP_END);
    const maskedFirstGroup: string = MASK_SYMBOL.repeat(firstGroup.length);
    const maskedSecondGroup: string = MASK_SYMBOL.repeat(secondGroup.length);
    switch (mode) {
      case 'compact':
        return PLUS_SIGN + digits;
      case 'international':
        return PLUS_SIGN + [countryCode, operatorCode, firstGroup, secondGroup, thirdGroup].join(SPACE);
      case 'national':
        return [operatorCode, firstGroup, secondGroup, thirdGroup].join(SPACE);
      case 'masked':
        return PLUS_SIGN + [countryCode, operatorCode, maskedFirstGroup, maskedSecondGroup, thirdGroup].join(SPACE);
    }
  }

}
