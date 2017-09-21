import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { routing } from './grid.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [GridComponent],
  exports: [RouterModule]
})
export class GridModule { }
