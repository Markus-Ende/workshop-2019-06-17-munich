import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoutPipe } from './shout.pipe';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [ShoutPipe, TooltipDirective],
  imports: [CommonModule],
  exports: [ShoutPipe, TooltipDirective]
})
export class SharedModule {}
