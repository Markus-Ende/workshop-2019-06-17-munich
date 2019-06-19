import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoutPipe } from './shout.pipe';

@NgModule({
  declarations: [ShoutPipe],
  imports: [CommonModule],
  exports: [ShoutPipe]
})
export class SharedModule {}
