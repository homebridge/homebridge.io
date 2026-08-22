import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {
  faDownload,
  faHeart,
  faSdCard,
} from '@fortawesome/free-solid-svg-icons'

import { FindPluginComponent } from './find-plugin/find-plugin.component'

@Component({
  selector: 'app-features',
  imports: [FindPluginComponent, FontAwesomeModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  public faHeart = faHeart
  public faSdCard = faSdCard
  public faDownload = faDownload

  constructor() {}
}
