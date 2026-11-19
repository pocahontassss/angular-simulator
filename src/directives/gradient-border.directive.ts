import { Directive, HostBinding, HostListener, Input, OnDestroy } from '@angular/core';
import { IGradientConfiguration } from '../app/interfaces/IGradientConfiguration';

const DEFAULT_DELAY: number = 1000;
const DEFAULT_COLORS: string[] = ['#ff0080', '#7928ca', '#00dfd8'];
const DEFAULT_THICKNESS: string = '2px';

@Directive({
  selector: '[appGradientBorder]',
})
export class GradientBorderDirective implements OnDestroy {

  @Input() GradientConfiguration: IGradientConfiguration = {};

  @HostBinding('class.gradient-border-active')
  isActive: boolean = false;
  timerId: ReturnType<typeof setTimeout> | null = null;

  @HostBinding('style.--gradient-thickness')
  get gradientThickness(): string {
    return this.GradientConfiguration.thickness ?? DEFAULT_THICKNESS;
  }

  @HostBinding('style.--gradient-colors')
  get gradientColors(): string {
    return (this.GradientConfiguration.colors ?? DEFAULT_COLORS).join(', ');
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.clearTimer();
    const DELAY: number = this.GradientConfiguration.delay ?? DEFAULT_DELAY;
    this.timerId = setTimeout((): void => {
      this.isActive = true;
    }, DELAY);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.clearTimer();
    this.isActive = false;
  }

  private clearTimer(): void {
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

}
