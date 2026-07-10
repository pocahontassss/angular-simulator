import { Directive, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { GradientBorderConfig } from '../interfaces';

@Directive({
  selector: '[animatedGradient]',
  standalone: true,
})
export class AnimatedGradientDirective implements OnDestroy {

  @Input() GradientConfiguration: GradientBorderConfig = {
    delay: 1000,
    colors: ['blue', 'yellow', 'purple'],
    thickness: 2,
  };

  @HostBinding('style.border') border!: string;
  @HostBinding('style.background') background!: string;
  @HostBinding('style.animation') animation = '';

  private timer: number | null = null;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.clearTimer();
    this.timer = window.setTimeout(() => {
      const colors: string = this.GradientConfiguration.colors?.join(', ') ?? 'blue, yellow, purple';
      const thickness: string | number = this.GradientConfiguration.thickness ?? 2;
      const gradient: string = `linear-gradient(45deg, ${ colors })`;
      this.border = `${ thickness }px solid transparent`;
      this.background = `${ gradient } padding-box, ${ gradient } border-box`;
    },this.GradientConfiguration.delay ?? 1000);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.clearTimer();
    this.border = '';
    this.background = '';
    this.animation = '';
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  private clearTimer(): void {
    if (this.timer !== null) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

}
