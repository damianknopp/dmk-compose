import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './transition-demo.routing';
import { TransitionComponent } from './transition/transition.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TransitionComponent]
})
export class TransitionDemoModule { }
