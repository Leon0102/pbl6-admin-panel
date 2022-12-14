import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'mp-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  isValidEmail = true;
  isValidPassword = true;
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [
      Validators.required,
      Validators.min(6)]),
  });
  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {}


  login() {
    this.loginForm.get('email')?.status === 'INVALID' ? this.isValidEmail = false : this.isValidEmail = true;
    this.loginForm.get('password')?.status === 'INVALID' ? this.isValidPassword = false : this.isValidPassword = true;

    if (!this.isValidEmail || !this.isValidPassword) {
      return;
    }
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!);
  }
}
