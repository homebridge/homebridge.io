import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-plugin',
  templateUrl: './find-plugin.component.html',
  styleUrls: ['./find-plugin.component.scss'],
})
export class FindPluginComponent implements OnInit {
  public searchInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.searchInput) {
      window.open(`https://www.npmjs.com/search?q=${encodeURIComponent('keywords:homebridge-plugin ' + this.searchInput)}`, '_blank');
      this.searchInput = '';
    }
  }

}
