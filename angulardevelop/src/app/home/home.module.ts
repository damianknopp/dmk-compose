import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [HomeComponent],
  exports: [ RouterModule ]
})
export class HomeModule { }
