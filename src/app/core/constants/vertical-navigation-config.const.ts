import { appConfig } from './app-routes-config.const';

export const SITE_ADMIN_NAVIGATION = [
  {
    name: 'Analytic',
    routeLink: [appConfig.routes.analytic.index],
    iconURL: 'https://img.icons8.com/material-outlined/96/null/dashboard-layout.png',
  },
  {
    name: 'User Management',
    routeLink: [appConfig.routes.userManagement.index],
    iconURL: 'https://img.icons8.com/ios-glyphs/90/null/commercial-development-management.png',
  },
  {
    name: 'Push Notification',
    routeLink: [appConfig.routes.pushNotification.index],
    iconURL: 'https://toppng.com/public/uploads/preview/notification-bell-black-11549537465xn5ekwdrj9.png',
  },
  {
    name: 'Property Content',
    routeLink: [appConfig.routes.propertyContent.index],
    iconURL: 'https://img.icons8.com/ios-glyphs/90/null/report-card.png',
  },
  {
    name: 'Billing Management',
    routeLink: [appConfig.routes.billingManagement.index],
    iconURL: 'https://img.icons8.com/ios-glyphs/90/null/credit-card.png',
  },
];
