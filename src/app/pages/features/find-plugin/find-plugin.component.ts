import { Component } from '@angular/core';

@Component({
  selector: 'app-find-plugin',
  templateUrl: './find-plugin.component.html',
  styleUrls: ['./find-plugin.component.scss'],
})
export class FindPluginComponent {
  public searchInput = '';

  constructor() { }

  submitForm() {
    if (this.searchInput) {
      window.open(`https://www.npmjs.com/search?q=${encodeURIComponent('keywords:homebridge-plugin ' + this.searchInput)}`, '_blank');
      this.searchInput = '';
    }
  }

}
