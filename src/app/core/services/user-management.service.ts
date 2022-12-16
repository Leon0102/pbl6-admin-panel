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
export class UserManagementService {

  constructor(
    private apiServices: ApiService,
    private router: Router,
  ) {
  }

  getUsers(options: any) {
    return this.apiServices.getWithOptions<any>('users', options);
  }

  getUserById(id: string) {
    return this.apiServices.get<any>(`users/${id}`);
  }

  deleteUser(id: string) {
    return this.apiServices.delete<any>(`users/${id}`);
  }

  updateUser(id: string, data: any) {
    return this.apiServices.update<any>(`users/${id}`, data);
  }

}
