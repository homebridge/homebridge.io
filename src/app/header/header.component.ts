import { Component, OnInit } from '@angular/core';
import { faGithub, faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public faGithub = faGithub;
  public faDiscord = faDiscord;
  public faReddit = faReddit;

  constructor() { }

  ngOnInit(): void {
  }

}
