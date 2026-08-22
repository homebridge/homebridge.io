import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-find-plugin',
  imports: [FormsModule],
  templateUrl: './find-plugin.component.html',
  styleUrl: './find-plugin.component.scss',
})
export class FindPluginComponent {
  public searchInput = ''

  constructor() { }

  submitForm() {
    if (this.searchInput) {
      window.open(`https://www.npmjs.com/search?q=${encodeURIComponent(`keywords:homebridge-plugin ${this.searchInput}`)}`, '_blank')
      this.searchInput = ''
    }
  }
}
