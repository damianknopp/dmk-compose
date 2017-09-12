import { Component, OnInit, HostBinding } from '@angular/core';
import { FooterLink } from './footer-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @HostBinding('class')
  class = 'footer';

  links: FooterLink[];

  constructor() { }

  ngOnInit() {
    this.links = [
      { site: 'Twitter', link: 'https://twitter.com' },
      { site: 'Github', link: 'https://github.com' },
      { site: 'Slack', link: 'https://slack.com' }
    ];
  }

}
