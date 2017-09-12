import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: 'app/home/home.module#HomeModule'
    },
    {
      path: 'transitions',
      loadChildren: 'app/transition-demo/transition-demo.module#TransitionDemoModule'
    },
    {
      path: 'charts',
      loadChildren: 'app/chart-demo/chart-demo.module#ChartDemoModule'
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: false });
