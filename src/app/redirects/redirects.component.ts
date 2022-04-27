import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as urlRedirects from '../../redirects.json'

@Component({
  selector: 'app-redirects',
  templateUrl: './redirects.component.html',
  styleUrls: ['./redirects.component.scss']
})
export class RedirectsComponent implements OnInit {
  public key: string;
  public divStyle: string;
  public url: string;

  public urlRedirects = (urlRedirects as any).default;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const mastheadHeight = document.getElementsByClassName('masthead-content')[0].clientHeight;
    const footerHeight = document.getElementsByTagName('footer')[0].clientHeight;

    if (window.innerHeight > (mastheadHeight + footerHeight)) {
      this.divStyle = 'min-height:' + (window.innerHeight - (mastheadHeight + footerHeight)) + 'px';
    } else {
      this.divStyle = 'min-height:300px';
    }

    this.key = this.activatedRoute.snapshot.paramMap.get('key');

    if (this.urlRedirects[this.key]) {
      this.url = this.urlRedirects[this.key];
      window.location.href = this.url;
    } else {
      this.url = this.urlRedirects.wiki;
      window.location.href = this.urlRedirects.wiki;
    }
  }

}
