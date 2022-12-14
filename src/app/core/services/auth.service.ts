/**
 * Based on
 * https://github.com/cornflourblue/angular-7-jwt-authentication-example
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient,
    private router: Router,
  ) {

  }

  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.router.navigate(['dashboard']);
    }
  }

  logout() {
    this.router.navigate(['auth/login']);

  }

  refreshToken() {

  }
}
