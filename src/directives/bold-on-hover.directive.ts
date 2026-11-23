import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBoldOnHover]',
})

export class BoldOnHoverDirective {

  private boldFontWeight: string = 'bold';
  private defaultFontWeight: string = '';

  @HostBinding('style.font-weight')
  fontWeight: string = this.defaultFontWeight;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.fontWeight = this.boldFontWeight;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.fontWeight = this.defaultFontWeight;
  }

}
