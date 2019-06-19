import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input() tooltip = 'default tooltip';

  @HostListener('mouseenter') onMouseEnter() {
    console.log('tooltip entered');
  }
  @HostListener('mouseleave') onMouseLeave() {
    console.log('tooltip left');
  }

  constructor() {}
}
