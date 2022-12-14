import { Component, Input } from '@angular/core';
import { CATEGORY } from '../../../../../../mock-data/category-data';

@Component({
  selector: 'mp-category-stats',
  templateUrl: './category-stats.component.html',
  styleUrls: ['./category-stats.component.scss']
})
export class CategoryStatsComponent {

  category = CATEGORY;
  @Input() isGrowth = false;
  @Input() categoryDescriptions: any[] = [];

  @Input() categoryStatusCard: any = {
    total: 0,
    percentage: 0
  };

  printCategoryType(type: any) {
    return type.replace(/_/g, ' ');
  }
  printIconCategoryType(type: any) {
    return type.toLowerCase().replace(/_/g, '-');
  }
}
