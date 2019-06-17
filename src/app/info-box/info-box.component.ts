import { Component } from '@angular/core';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent {
  isHidden = false;

  toggleHide() {
    this.isHidden = !this.isHidden;
  }
}
