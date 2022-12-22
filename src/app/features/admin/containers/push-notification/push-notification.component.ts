import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NOTIFICATIONS_COLUMN_CONFIG } from '../../../../core/constants/app-table-column-config.const';
import { initialFilter, PaginationModel, TableFilterModel } from '../../../../core/models';
import { PushNotification } from '../../../../core/models/push.notification.interface';
import { AdminService } from '../../../../core/services';
import { HelperService } from '../../../../core/services/helper.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { removeEmptyValues } from '../../../../core/utils/helper';

@Component({
  selector: 'mp-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.scss']
})
export class PushNotificationComponent implements OnInit {

  notificationsColumnConfig = NOTIFICATIONS_COLUMN_CONFIG;

  $notifications: any[] = [];

  skeletonRow = initialFilter.page * 10;

  $isLoading = true;

  $searchLoading = false;

  searchFilter: TableFilterModel = {
    page: 1,
  };

  pagination: PaginationModel = {
    take: 0,
    itemCount: 0,
    pageCount: 0,
    hasPreviousPage: false,
    hasNextPage: true,
    page: 0,
  };


  pushNotificationForm!: FormGroup;

  pushNotificationValid = {
    title: true,
    body: true
  };
  constructor(
    public form: FormBuilder,
    private helperService: HelperService,

    public notificationService: NotificationService,

    public adminService: AdminService
  ) {}

  ngOnInit() {
    this.getNotifications();
    this.pushNotificationForm = this.form.group({
      title: this.form.control('[Wanderlust] Notification', Validators.required),
      body: this.form.control('', Validators.required),
    });
  }

  getNotifications() {
    this.adminService.getNotifications(this.searchFilter).subscribe((res: any) => {
      if (res) {
        console.log(res);
        this.$notifications = res.data.notifications;
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

  onPushNotification() {
    if (this.validateInput()) {
      const req: PushNotification = {
        title: this.pushNotificationForm.get('title')?.value,
        body: this.pushNotificationForm.get('body')?.value,
      };
      this.helperService.pushNotification(req).subscribe(el => {
        if (el.statusCode === 201) {
          this.notificationService.success('Push Notification Successfully!');
          this.pushNotificationForm.reset();
          this.getNotifications();
        }
        else {
          this.notificationService.error('Push Notification Failed!');
        }
      });
    }
  }


  validateInput() {
    this.pushNotificationForm.get('title')?.status == 'VALID' ? this.pushNotificationValid.title = true : this.pushNotificationValid.title = false;
    this.pushNotificationForm.get('body')?.status == 'VALID' ? this.pushNotificationValid.body = true : this.pushNotificationValid.body = false;

    if (!this.pushNotificationValid.title || !this.pushNotificationValid.body) {
      return false;
    }
    return true;
  }
  getFilter() {
    this.$searchLoading = true;
    removeEmptyValues(this.searchFilter);
  }

  onChangePagination(event: any) {
    this.getFilter();
    this.searchFilter.page = event.page;
    this.$searchLoading = true;
    this.getNotifications();
  }
}
