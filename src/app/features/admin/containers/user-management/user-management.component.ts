import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { USER_COLUMNS_CONFIG } from 'src/app/core/constants/app-table-column-config.const';
import { initialFilter, PaginationModel, TableFilterModel } from 'src/app/core/models';
import { ELEMENT_DATA } from 'src/app/mock-data/user-management-data';
import { formatDateQuery } from '../../../../core/utils';
import { removeEmptyValues } from '../../../../core/utils/helper';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { UserManagementEditComponent } from './container/user-management-edit/user-management-edit.component';

@Component({
  selector: 'mp-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['position', 'email', 'joinDate', 'isSubscription', 'message', 'action'];
  dataSource = ELEMENT_DATA;

  userColumnsConfig = USER_COLUMNS_CONFIG;

  searchFilter: TableFilterModel = {
    page: 1,
    take: 10,
    createdAt: 'DESC'
  };
  searchValue = '';

  searchKey = '';

  $userList = ELEMENT_DATA;

  initFilter: TableFilterModel = initialFilter;

  skeletonRow = initialFilter.take;

  $isLoading = true;

  $searchLoading = false;
  range = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });


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

  ) {
    setInterval(() => {
      this.$isLoading = false;
    }, 500);
  }

  ngOnInit(): void {}

  getUsers(filter: TableFilterModel) {
  }


  onSortChanged(event: any) {
    console.log(event);
  }


  openConfirmDialog(event: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: 'Are you sure you want to delete this user!',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  onClickUrl(event: any) {
    console.log(event);
  }

  onChangePagination(event: any) {
    console.log(event);
  }

  onClickedRow(event: any) {
    const dialogRef = this.dialog.open(UserManagementEditComponent, {
      width: '996px',
      data: event,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('abc', result);
    });
  }

  onRemoved(event: any) {
    console.log(`onRemoved`);
  }


  onOpenMessage(event: any) {
    console.log(`message`);
  }

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
    this.getFilter();
    this.searchFilter.page = 1;
    this.getUsers(this.searchFilter);
  }
}
