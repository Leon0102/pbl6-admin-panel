import { Component } from '@angular/core';
import { STAT_CARD } from 'src/app/mock-data/analytic-data';

@Component({
  selector: 'mp-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.scss']
})
export class AnalyticComponent {

  cardMockData = STAT_CARD;
  $isLoading = false;
  constructor(
  ) {
    this.getWidgetDescription();
  }

  getWidgetDescription() {

  }
}
