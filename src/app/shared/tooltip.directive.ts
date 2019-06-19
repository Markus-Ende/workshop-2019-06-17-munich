import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input() set tooltipText(newVal: string) {
    this.tooltipElement.innerText = newVal;
  }

  private tooltipElement = this.doc.createElement('div');

  @HostListener('mouseenter') onMouseEnter() {
    console.log('tooltip entered');
    this.elementRef.nativeElement.appendChild(this.tooltipElement);
  }
  @HostListener('mouseleave') onMouseLeave() {
    console.log('tooltip left');
    this.elementRef.nativeElement.removeChild(this.tooltipElement);
  }

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private doc: Document
  ) {}
}
