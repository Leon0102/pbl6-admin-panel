/**
 * Based on
 * https://github.com/cornflourblue/angular-7-jwt-authentication-example
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '.';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private apiServices: ApiService,
    private router: Router,
  ) {
  }

  getAnalytics() {
    return this.apiServices.get('admin/analytics');
  }

  getNotifications(options: any) {
    return this.apiServices.getWithOptions<any>('admin/notifications', options);
  }

}
