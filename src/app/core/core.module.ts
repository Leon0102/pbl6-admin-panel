import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminGuard, IsLoggedInGuard } from './guards';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AdminService, ApiService, AuthService, NavigationService } from './services';
import { HelperService } from './services/helper.service';
import { NotificationService } from './services/notification.service';
export const CORE_PROVIDERS = [
  AdminGuard,
  IsLoggedInGuard,
  AuthService,
  NavigationService,
  NotificationService,
  HelperService,
  AdminService,
  ApiService
];

export const CORE_MODULES = [CommonModule, MatSnackBarModule, MatDialogModule];

@NgModule({
  imports: [...CORE_MODULES],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...CORE_PROVIDERS],
    };
  }
}
