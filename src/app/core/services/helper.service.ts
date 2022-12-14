/**
 * Based on
 * https://github.com/cornflourblue/angular-7-jwt-authentication-example
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '.';
import { PushNotification } from '../models/push.notification.interface';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private apiServices: ApiService,
    private router: Router,
  ) {
  }

  pushNotification(pushNotification: PushNotification) {
    return this.apiServices.post<any>('users/notifications', pushNotification);
  }


}
