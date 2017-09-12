import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
