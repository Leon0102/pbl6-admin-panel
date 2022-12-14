import { Component } from '@angular/core';
import { AuthService } from '../../../core/services';

@Component({
  selector: 'mp-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {

  constructor(
    private authService: AuthService,
  ) {

  }
  sideBar = true;
  toggleSideBar() {
    this.sideBar = !this.sideBar;
  }

  logOut() {
    console.log('logout');
    this.authService.logout();

  }
}
