import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartDemoComponent } from './chart-demo.component';

const routes: Routes = [
    {
      path: '',
      component: ChartDemoComponent
    }
  ];

export const chartDemoRouting: ModuleWithProviders = RouterModule.forChild(routes);
