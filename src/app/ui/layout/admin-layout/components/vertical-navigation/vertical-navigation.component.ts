import { Component } from '@angular/core';
import { Pages } from 'src/app/core/constants';
import { SITE_ADMIN_NAVIGATION } from 'src/app/core/constants/vertical-navigation-config.const';

@Component({
  selector: 'mp-vertical-navigation',
  templateUrl: './vertical-navigation.component.html',
  styleUrls: ['./vertical-navigation.component.scss']
})
export class VerticalNavigationComponent {

  Pages = Pages;
  SITE_ADMIN_NAVIGATION = SITE_ADMIN_NAVIGATION;
  collapseShow = "hidden";
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
}
