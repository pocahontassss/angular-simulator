import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[boldOnHover]',
  standalone: true,
})
export class BoldOnHoverDirective {

  @HostBinding('style.fontWeight') fontWeight: string = 'Bold';

  @HostListener('mouseenter')
  onEnter() {
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.fontWeight = '';
  }

}
