import { ModuleWithProviders } from '@angular/core';
import { TransitionComponent } from './transition/transition.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: TransitionComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
