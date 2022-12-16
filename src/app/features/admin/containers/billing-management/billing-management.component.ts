import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TableFilterModel } from '../../../../core/models';
import { formatDateQuery } from '../../../../core/utils';
import { removeEmptyValues } from '../../../../core/utils/helper';

@Component({
  selector: 'mp-billing-management',
  templateUrl: './billing-management.component.html',
  styleUrls: ['./billing-management.component.scss']
})
export class BillingManagementComponent implements OnInit {

  searchFilter: TableFilterModel = {
    page: 1,
    createdAt: 'DESC'
  };
  searchValue = '';
  searchKey = '';
  $searchLoading = false;
  range = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });
  constructor() {}

  ngOnInit(): void {}

  getFilter() {
    this.$searchLoading = true;
    this.searchFilter.searchKey = this.searchKey;

    if (this.range.value.startDate) {
      this.searchFilter.startDate = formatDateQuery(this.range.value.startDate);
    }
    if (this.range.value.endDate) {
      this.searchFilter.endDate = formatDateQuery(this.range.value.endDate);
    }
    removeEmptyValues(this.searchFilter);
  }

  search() {
  }
}
