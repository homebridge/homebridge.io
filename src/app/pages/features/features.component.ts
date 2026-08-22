import { Component } from '@angular/core';
import { faHeart, faSdCard, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FindPluginComponent } from './find-plugin/find-plugin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  imports: [FindPluginComponent, FontAwesomeModule],
})
export class FeaturesComponent {
  public faHeart = faHeart;
  public faSdCard = faSdCard;
  public faDownload = faDownload;

  constructor() { }

}
