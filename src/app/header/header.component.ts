import { Component } from '@angular/core';
import { faGithub, faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlatformSelectorComponent } from '../platform-selector/platform-selector.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [FontAwesomeModule, PlatformSelectorComponent],
})
export class HeaderComponent {
  public faGithub = faGithub;
  public faDiscord = faDiscord;
  public faReddit = faReddit;

  constructor() {

  }
}
