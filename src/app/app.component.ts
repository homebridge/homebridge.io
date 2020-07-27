import { Component } from '@angular/core';
import { faGithub, faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  public faGithub = faGithub;
  public faDiscord = faDiscord;
  public faReddit = faReddit;

  public currentYear = new Date().getFullYear();
}
