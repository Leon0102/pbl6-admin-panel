import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutsModule } from 'src/app/ui/layout';
import { BreadcrumbModule } from '../../shared/components/breadcrumb/breadcrumb.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutsModule,
    BreadcrumbModule,
  ],
  declarations: [
    AdminComponent,
  ]
})
export class AdminModule {}
