import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('style.font-weight') fontWeight: string = 'normal';

  @HostListener('mouseenter')
  onEnter() {
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.fontWeight = 'normal';
  }
}
