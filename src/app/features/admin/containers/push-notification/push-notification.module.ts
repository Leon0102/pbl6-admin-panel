import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from '../../../../shared/components/breadcrumb/breadcrumb.module';
import { LoadingModule } from '../../../../shared/components/loading/loading.module';
import { PaginatorComponent } from '../../../../shared/components/paginator';
import { SkeletonModule } from '../../../../shared/components/skeleton/skeleton.module';
import { TableModule } from '../../../../shared/components/table/table.module';
import { PushNotificationComponent } from './push-notification.component';

@NgModule({
  declarations: [PushNotificationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PushNotificationComponent,
      },
    ]),
    BreadcrumbModule,
    SkeletonModule,
    FormsModule,
    TableModule,
    LoadingModule,
    PaginatorComponent,
    ReactiveFormsModule
  ],
})
export class PushNotificationModule {}
