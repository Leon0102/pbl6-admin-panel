import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from '../../../../shared/components/breadcrumb/breadcrumb.module';
import { LoadingModule } from '../../../../shared/components/loading/loading.module';
import { PaginatorComponent } from '../../../../shared/components/paginator';
import { SkeletonModule } from '../../../../shared/components/skeleton/skeleton.module';
import { TableModule } from '../../../../shared/components/table/table.module';
import { PipesModule } from '../../../../shared/pipes/pipes.module';
import { LayoutsModule } from '../../../../ui/layout';
import { BillingManagementComponent } from './billing-management.component';
@NgModule({
  declarations: [BillingManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BillingManagementComponent,
      },
    ]),
    SkeletonModule,
    PipesModule,
    PaginatorComponent,
    TableModule,
    MatDialogModule,
    LayoutsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingModule,
    BreadcrumbModule
  ],
})
export class BillingManagementModule {}
