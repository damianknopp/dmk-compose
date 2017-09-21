import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid.component';

const routes: Routes = [
    {
      path: '',
      component: GridComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
