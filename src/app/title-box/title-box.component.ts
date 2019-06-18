import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('doCHECK');
  }
  @Input()
  title = 'initial';

  @Output()
  titleClick = new EventEmitter<string>();

  onTitleClick() {
    this.titleClick.emit('clicked');
  }
}
