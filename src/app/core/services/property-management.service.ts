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
export class PropertyManagementService {

  constructor(
    private apiServices: ApiService,
    private router: Router,
  ) {
  }

  getProperties(options: any) {
    return this.apiServices.getWithOptions<any>('properties', options);
  }

  getPropertyById(id: string) {
    return this.apiServices.get<any>(`properties/${id}`);
  }

  verifyProperty(id: string) {
    return this.apiServices.update<any>(`properties/${id}/verification`, {});
  }

  deleteProperty(id: string) {
    return this.apiServices.delete<any>(`properties/${id}`);
  }
}
