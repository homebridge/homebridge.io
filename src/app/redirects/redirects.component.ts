import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSync } from '@fortawesome/free-solid-svg-icons';

import * as urlRedirects from '../../redirects.json';

@Component({
  selector: 'app-redirects',
  templateUrl: './redirects.component.html',
  styleUrls: ['./redirects.component.scss']
})
export class RedirectsComponent implements OnInit {
  public faSync = faSync;

  public key: string;
  public url: string;

  public urlRedirects = (urlRedirects as any).default;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.key = this.activatedRoute.snapshot.paramMap.get('key');

    if (this.urlRedirects[this.key]) {
      this.url = this.urlRedirects[this.key];
      // window.location.href = this.url;
    } else {
      this.url = this.urlRedirects.wiki;
      // window.location.href = this.urlRedirects.wiki;
    }
  }

}
