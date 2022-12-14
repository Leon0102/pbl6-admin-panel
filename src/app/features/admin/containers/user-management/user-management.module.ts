import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { PaginatorComponent } from 'src/app/shared/components/paginator';
import { SkeletonModule } from 'src/app/shared/components/skeleton/skeleton.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { LoadingModule } from '../../../../shared/components/loading/loading.module';
import { LayoutsModule } from '../../../../ui/layout';
import { UserManagementEditComponent } from './container/user-management-edit/user-management-edit.component';
import { UserManagementComponent } from './user-management.component';
@NgModule({
  declarations: [UserManagementComponent, UserManagementEditComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    MatTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserManagementComponent,
      },
    ]),
    SkeletonModule,
    PipesModule,
    PaginatorComponent,
    TableModule,
    MatDialogModule,
    LayoutsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingModule,
    MatNativeDateModule
  ],
})
export class UserManagementModule {}
