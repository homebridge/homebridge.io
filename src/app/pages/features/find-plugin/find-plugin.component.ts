import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-plugin',
  templateUrl: './find-plugin.component.html',
  styleUrls: ['./find-plugin.component.scss'],
  imports: [FormsModule],
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
