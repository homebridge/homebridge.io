import { Component } from '@angular/core';
import { faGithub, faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public faGithub = faGithub;
  public faDiscord = faDiscord;
  public faReddit = faReddit;

  constructor() {

  }
}
