import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ChartDemoComponent } from './chart-demo.component';
import { chartDemoRouting } from './chart-demo.routing';
import { ChartDemoService } from './chart-demo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    chartDemoRouting
  ],
  declarations: [ChartDemoComponent],
  providers: [ChartDemoService]
})
export class ChartDemoModule { }
