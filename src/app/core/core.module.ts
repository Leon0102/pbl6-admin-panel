import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService, NavigationService } from './services';
import { HelperService } from './services/helper.service';
import { NotificationService } from './services/notification.service';
export const CORE_PROVIDERS = [
  AuthService,
  NavigationService,
  NotificationService,
  HelperService,
];

export const CORE_MODULES = [CommonModule, MatSnackBarModule, MatDialogModule];

@NgModule({
  imports: [...CORE_MODULES],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...CORE_PROVIDERS],
    };
  }
}
