import { Component } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent {
  x: number;
  y: number;

  onMousemove(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
  }
}
