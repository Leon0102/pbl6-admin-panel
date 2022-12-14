import { Component } from '@angular/core';
import { NavigationService } from '../../core/services';

@Component({
  selector: 'mp-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  constructor(
    private navigationService: NavigationService
  ) {
  }

  goHome() {
    this.navigationService.defaultPage();
  }
}
