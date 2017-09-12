import { Component, OnInit } from '@angular/core';
import { parentFadeIn } from '../animations/slide-in-out.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [parentFadeIn]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
