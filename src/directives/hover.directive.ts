import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hover]',
  standalone: true,
})
export class HoverDirective {

    @HostBinding('style.fontWeight') textBold = 'normal';

    @HostListener('mouseenter')
    onEnter(): void {
      this.textBold = 'bold';
    }

    @HostListener('mouseleave')
    onLeave(): void {
      this.textBold = 'normal';
    }

}
