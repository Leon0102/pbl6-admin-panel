import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import { SkeletonBlockComponent } from './skeleton-block/skeleton-block.component';
import { SkeletonLoadingTableComponent } from './skeleton-loading-table/skeleton-loading-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatCheckboxModule],
  declarations: [SkeletonLoadingTableComponent, SkeletonBlockComponent],
  exports: [SkeletonLoadingTableComponent, SkeletonBlockComponent],
})
export class SkeletonModule {}
