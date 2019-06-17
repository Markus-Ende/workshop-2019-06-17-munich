import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent {
  @Input()
  title = 'initial';

  @Output()
  titleClick = new EventEmitter<string>();

  onTitleClick() {
    this.titleClick.emit('clicked');
  }
}
