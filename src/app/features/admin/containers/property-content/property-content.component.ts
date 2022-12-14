import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PROPERTY_COLUMNS_CONFIG } from '../../../../core/constants/app-table-column-config.const';
import { initialFilter, PaginationModel, TableFilterModel } from '../../../../core/models';
import { removeEmptyValues } from '../../../../core/utils/helper';
import { PROPERTY_CONTENT } from '../../../../mock-data/property-data';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { PropertyContentEditComponent } from './container/property-content-edit/property-content-edit.component';

@Component({
  selector: 'mp-property-content',
  templateUrl: './property-content.component.html',
  styleUrls: ['./property-content.component.scss']
})
export class PropertyContentComponent implements OnInit {


  propertyColumnsConfig = PROPERTY_COLUMNS_CONFIG;

  propertyContent = PROPERTY_CONTENT;

  searchKey = '';
  range = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });

  isSolved = 'All';
  $isLoading = false;
  $searchLoading = false;

  initFilter: TableFilterModel = initialFilter;
  skeletonRow = initialFilter.take;

  searchFilter: TableFilterModel = {
    page: 1,
    take: 10,
    createdAt: 'DESC',
  };


  pagination: PaginationModel = {
    take: 0,
    itemCount: 0,
    pageCount: 0,
    hasPreviousPage: false,
    hasNextPage: true,
    page: 0,
  };
  constructor(
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getProperties(this.initFilter);
  }

  getProperties(filter: TableFilterModel) {

  }


  onChangePagination(event: any) {
    this.searchFilter.page = event.page;
    this.$searchLoading = true;
    this.getProperties(this.searchFilter);
  }

  onSortChanged(event: any) {

    this.searchFilter.createdAt = event.sortType.toUpperCase();
    this.search();
  }

  search() {
    this.getFilter();
    this.searchFilter.page = 1;
    this.getProperties(this.searchFilter);
  }

  getFilter() {
    this.$searchLoading = true;
    this.searchFilter.searchKey = this.searchKey;
    if (this.isSolved === 'Solved') {
      this.searchFilter.isSolved = true;
    }
    if (this.isSolved === 'Unsolved') {
      this.searchFilter.isSolved = false;
    }
    if (this.isSolved === 'All') {
      this.searchFilter.isSolved = undefined;
    }
    removeEmptyValues(this.searchFilter);
  }


  onClickedRow(event: any) {
    const dialogRef = this.dialog.open(PropertyContentEditComponent, {
      width: '900px',
      height: '80%',
      data: 'Do you want to solve this Property?',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openConfirmDialog(event: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: 'Are you sure you want to delete this Property!',
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }
}
