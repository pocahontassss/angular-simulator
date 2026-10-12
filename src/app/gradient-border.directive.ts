import { Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2, RendererStyleFlags2 } from '@angular/core';

export interface GradientConfig {
  delay?: number;
  colors?: string[];
  thickness?: string
}

const DEFAULTS: Required<GradientConfig> = {
  delay: 1000,
  colors: ['yellow', 'green', 'red'],
  thickness: '2px'
}

@Directive({
  selector: '[appGradientBorder]',
  standalone: true
})
export class GradientBorderDirective implements OnDestroy {

  @Input() GradientConfiguration: GradientConfig = {};

  private timerId: ReturnType<typeof setTimeout> | null = null;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('mouseenter')
  onEnter(): void {
    const cfg = { ...DEFAULTS, ...this.GradientConfiguration };
    this.clearTimer()
    this.timerId = setTimeout(() => this.activate(cfg), cfg.delay)
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.clearTimer();
    this.diactivate();
  }

  private activate(cfg: Required<GradientConfig>): void {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, '--gb-colors', cfg.colors.join(', '), RendererStyleFlags2.DashCase);
    this.renderer.setStyle(el, '--gb-thickness', cfg.thickness, RendererStyleFlags2.DashCase);
    this.renderer.addClass(el, 'gradient-border-active');
  }

  private diactivate(): void {
    const el = this.el.nativeElement;
    this.renderer.removeClass(el, 'gradient-border-active');
    this.renderer.removeStyle(el, '--gb-colors', RendererStyleFlags2.DashCase);
    this.renderer.removeStyle(el, '--gb-thickness', RendererStyleFlags2.DashCase);
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
