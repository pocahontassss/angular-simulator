import { Directive, HostBinding, HostListener, Input, OnDestroy } from '@angular/core';
import { IGradientConfiguration } from '../app/interfaces/IGradientConfiguration';

@Directive({
  selector: '[appGradientBorder]',
})
export class GradientBorderDirective implements OnDestroy {

  private defaultDelay: number = 1000;
  private defaultColors: string[] = ['#ff0080', '#7928ca', '#00dfd8'];
  private defaultThickness: string = '2px';

  @Input() GradientConfiguration: IGradientConfiguration = {};

  @HostBinding('class.gradient-border-active')
  isActive: boolean = false;
  timerId: ReturnType<typeof setTimeout> | null = null;

  @HostBinding('style.--gradient-thickness')
  get gradientThickness(): string {
    return this.GradientConfiguration.thickness ?? this.defaultThickness;
  }

  @HostBinding('style.--gradient-colors')
  get gradientColors(): string {
    return (this.GradientConfiguration.colors ?? this.defaultColors).join(', ');
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.clearTimer();
    const delay: number = this.GradientConfiguration.delay ?? this.defaultDelay;
    this.timerId = setTimeout((): void => {
      this.isActive = true;
    }, delay);
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
