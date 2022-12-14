import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../../../../../../core/services';
@Component({
  selector: 'mp-user-management-edit',
  templateUrl: './user-management-edit.component.html',
  styleUrls: ['./user-management-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserManagementEditComponent implements OnInit {

  $isLoading = false;
  userData!: any;

  roles = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'host', viewValue: 'Host' },
    { value: 'guest', viewValue: 'Guest' }
  ];

  constructor(
    public dialog: MatDialog,
    private notificationService: NotificationService,
    @Inject(DOCUMENT) private doc: any,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.getUserDetail();
  }
  ngOnInit(): void {

  }


  getUserDetail() {
  }
}
