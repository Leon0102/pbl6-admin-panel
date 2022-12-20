import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../../core/services';

@Component({
  selector: 'mp-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.scss']
})
export class AnalyticComponent implements OnInit {

  cardData: any;

  categoryStatusCard: any;

  visitorOverviewData: any;

  amountReservationsOverviewData: any;
  $isLoading = false;
  constructor(
    private analyticsService: AnalyticsService
  ) {}
  ngOnInit(): void {
    this.getAnalytics();
  }

  getAnalytics() {
    this.$isLoading = true;
    this.analyticsService.getAnalytics().subscribe((res: any) => {
      if (res) {
        this.$isLoading = false;
        this.cardData = res.data.total;
        this.visitorOverviewData = res.data.usersEachMonth;
        this.categoryStatusCard = res.data.propertiesEachCategory;
        this.amountReservationsOverviewData = res.data.amountReservationsEachMonth;
      }
    });
  }
}
