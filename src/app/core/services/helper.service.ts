/**
 * Based on
 * https://github.com/cornflourblue/angular-7-jwt-authentication-example
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PushNotification } from '../models/push.notification.interface';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  pushNotification(pushNotification: PushNotification) {
    return this.http.post<any>('admin/push-notification', pushNotification);
  }


}
