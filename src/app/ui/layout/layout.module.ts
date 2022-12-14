import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './admin-layout/components/header/header.component';
import { VerticalNavigationComponent } from './admin-layout/components/vertical-navigation/vertical-navigation.component';
import { ModelLayoutComponent } from './model-layout/model-layout.component';

const COMPONENTS = [
  HeaderComponent,
  AdminLayoutComponent,
  VerticalNavigationComponent,
  ModelLayoutComponent,
  HeaderComponent
];

const MODULES = [
  CommonModule,
  RouterModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatTreeModule,
  MatExpansionModule,
  MatListModule,
  MatDialogModule,
  LogoModule
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [...MODULES],
})
export class LayoutsModule {}
