import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { LoadingModule } from '../../shared/components/loading/loading.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingModule,
    LogoModule,
  ],
  declarations: [
    LoginPageComponent,
    AuthComponent
  ]
})
export class AuthModule {}
