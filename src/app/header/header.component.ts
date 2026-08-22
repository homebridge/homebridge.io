import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faDiscord, faGithub, faReddit } from '@fortawesome/free-brands-svg-icons'

import { PlatformSelectorComponent } from '../platform-selector/platform-selector.component'

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, PlatformSelectorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public faGithub = faGithub
  public faDiscord = faDiscord
  public faReddit = faReddit

  constructor() {

  }
}
