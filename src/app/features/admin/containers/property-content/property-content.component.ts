import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PROPERTY_COLUMNS_CONFIG } from '../../../../core/constants/app-table-column-config.const';
import { initialFilter, PaginationModel, TableFilterModel } from '../../../../core/models';
import { PropertyManagementService } from '../../../../core/services';
import { removeEmptyValues } from '../../../../core/utils/helper';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { PropertyContentEditComponent } from './container/property-content-edit/property-content-edit.component';

@Component({
  selector: 'mp-property-content',
  templateUrl: './property-content.component.html',
  styleUrls: ['./property-content.component.scss']
})
export class PropertyContentComponent implements OnInit {


  propertyColumnsConfig = PROPERTY_COLUMNS_CONFIG;

  $propertyContent: any;

  searchKey = '';
  range = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });

  isVerified = 'All';
  $isLoading = false;
  $searchLoading = false;

  initFilter: TableFilterModel = initialFilter;
  skeletonRow = initialFilter.page * 10;

  searchFilter: TableFilterModel = {
    page: 1,
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
    private propertyManagementService: PropertyManagementService,


  ) {}

  ngOnInit(): void {
    this.getProperties(this.initFilter);
  }

  getProperties(filter: TableFilterModel) {
    this.$searchLoading = true;
    this.propertyManagementService.getProperties(this.searchFilter).subscribe(res => {
      if (res) {
        this.$propertyContent = res.data.properties;
        this.pagination = {
          take: res.data.currentPage * 10,
          itemCount: res.data.totalCount,
          pageCount: res.data.totalPage,
          page: res.data.currentPage,
        };
        this.$isLoading = false;
        this.$searchLoading = false;

      }
    });
  }


  onChangePagination(event: any) {
    this.searchFilter.page = event.page;
    this.$searchLoading = true;
    this.getProperties(this.searchFilter);
  }

  onSortChanged(event: any) {
    if (event.sortBy = 'createdAt') {
      this.searchFilter.createdAt = 'DESC';
    }
    if (event.sortBy = 'avgRating') {
      this.searchFilter.order = event.sortType.toUpperCase();
      this.searchFilter.sortBy = 'avgRating';
    }
    this.getFilter();
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
    if (this.isVerified === 'All') {
      this.searchFilter.isVerified = '';
    } else {
      this.searchFilter.isVerified = this.isVerified === 'Verified' ? 'true' : 'false';
    }
    removeEmptyValues(this.searchFilter);
  }


  onClickedRow(event: any) {
    const dialogRef = this.dialog.open(PropertyContentEditComponent, {
      width: '900px',
      height: '80%',
      data: event.id,
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
      if (data && data !== 'false') {
        this.propertyManagementService.verifyProperty(event.id).subscribe(res => {
          if (res) {
            this.getProperties(this.searchFilter);
          }
        });
      }
    });
  }

  openConfirmDialog(event: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: 'Are you sure you want to delete this Property!',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.propertyManagementService.deleteProperty(event.id).subscribe(res => {
          if (res) {
            this.getProperties(this.searchFilter);
          }
        });
      }
    });
  }
}
