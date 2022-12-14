import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'mp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleSideBar = new EventEmitter<boolean>();
  sideBar = true;
  toggleNavigation() {
    this.toggleSideBar.emit(!this.sideBar);
  }

}
