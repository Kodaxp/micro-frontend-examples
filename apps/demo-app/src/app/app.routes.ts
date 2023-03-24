import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'mf-form-example',
    loadChildren: () => import('mf-form-example/Module').then((m) => m.RemoteEntryModule)
  },
  {
    path: '',
    component: NxWelcomeComponent
  }
];
