import { Component } from '@angular/core'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import {
  faDiscord,
  faGithub,
  faReddit,
} from '@fortawesome/free-brands-svg-icons'

import { PlatformSelectorComponent } from '../platform-selector/platform-selector.component'

@Component({
  selector: 'app-header',
  imports: [FaIconComponent, PlatformSelectorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public faGithub = faGithub
  public faDiscord = faDiscord
  public faReddit = faReddit

  /** Bootstrap's collapse plugin is the only javascript this site used it for, so the navbar state lives here instead. */
  public navbarOpen = false

  public toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen
  }
}
