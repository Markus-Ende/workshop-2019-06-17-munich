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
  @Input()
  title = 'initial';

  @Output()
  titleClick = new EventEmitter<string>();

  onTitleClick() {
    this.titleClick.emit('clicked');
  }

  ngDoCheck(): void {
    console.log('doCHECK');
  }
}
