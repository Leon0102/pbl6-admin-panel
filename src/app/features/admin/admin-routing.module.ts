import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pages } from 'src/app/core/constants';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'analytic',
      },
      {
        path: Pages.ANALYTIC,
        canActivate: [],
        loadChildren: () =>
          import('./containers/analytic/analytic.module').then(
            (m) => m.AnalyticModule
          ),
      },
      {
        path: Pages.USER_MANAGEMENT,
        canActivate: [],
        loadChildren: () =>
          import('./containers/user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
      {
        path: Pages.PUSH_NOTIFICATION,
        canActivate: [],
        loadChildren: () =>
          import('./containers/push-notification/push-notification.module').then(
            (m) => m.PushNotificationModule
          ),
      },
      {
        path: Pages.PROPERTY_CONTENT,
        canActivate: [],
        loadChildren: () =>
          import('./containers/property-content/property-content.module').then(
            (m) => m.PropertyContentModule
          ),
      },
      {
        path: Pages.BILLING_MANAGEMENT,
        canActivate: [],
        loadChildren: () =>
          import('./containers/billing-management/billing-management.module').then(
            (m) => m.BillingManagementModule
          ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
