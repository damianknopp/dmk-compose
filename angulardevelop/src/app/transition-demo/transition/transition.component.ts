import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation, parentFadeIn, spinAnimation } from '../../animations/slide-in-out.animation';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css'],
  animations:  [parentFadeIn, slideInOutAnimation, spinAnimation]
})
export class TransitionComponent implements OnInit {
  cssArr = [ 'opacity', 'color', 'border-radius', 'shadow', 'spin', 'big'];

  constructor() {
    console.log('transitioncomponent ctor');
  }

  ngOnInit() {
  }

  logAnimation(event: UIEvent): void {
    console.log(event);
  }

}
