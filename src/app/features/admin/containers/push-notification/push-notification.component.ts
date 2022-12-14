import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PushNotification } from '../../../../core/models/push.notification.interface';
import { HelperService } from '../../../../core/services/helper.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'mp-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.scss']
})
export class PushNotificationComponent implements OnInit {
  pushNotificationForm!: FormGroup;

  pushNotificationValid = {
    title: true,
    body: true
  };
  constructor(
    public form: FormBuilder,
    private helperService: HelperService,

    public notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.pushNotificationForm = this.form.group({
      title: this.form.control('[Wanderlust] Notification', Validators.required),
      body: this.form.control('', Validators.required),
    });
  }

  onPushNotification() {
    if (this.validateInput()) {
      const req: PushNotification = {
        title: this.pushNotificationForm.get('title')?.value,
        body: this.pushNotificationForm.get('body')?.value,
      };
      this.helperService.pushNotification(req).subscribe(el => {
        if (el.statusCode === 200) {
          this.notificationService.success('Push Notification Successfully!');
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
}
