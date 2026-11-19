import { Directive, HostBinding, HostListener } from '@angular/core';

const BOLD_FONT_WEIGHT: string = 'bold';
const DEFAULT_FONT_WEIGHT: string = '';

@Directive({
  selector: '[appBoldOnHover]',
})

export class BoldOnHoverDirective {

  @HostBinding('style.font-weight')
  fontWeight: string = DEFAULT_FONT_WEIGHT;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.fontWeight = BOLD_FONT_WEIGHT;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.fontWeight = DEFAULT_FONT_WEIGHT;
  }

}
