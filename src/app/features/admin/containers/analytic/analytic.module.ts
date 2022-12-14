import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { SkeletonModule } from 'src/app/shared/components/skeleton/skeleton.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { AnalyticComponent } from './analytic.component';
import { BillingOverviewComponent } from './components/billing/billing-overview.component';
import { CategoryStatsComponent } from './components/category-stats/category-stats.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { VisitorOverviewComponent } from './components/visitor-overview/visitor-overview.component';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbModule,
    SkeletonModule,
    PipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: AnalyticComponent,
      },
    ]),
  ],
  declarations: [
    AnalyticComponent,
    StatCardComponent,
    VisitorOverviewComponent,
    BillingOverviewComponent,
    CategoryStatsComponent,
  ]
})
export class AnalyticModule {}
