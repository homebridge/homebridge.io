import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faDownload, faSdCard } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-official-raspberry-pi-image',
  imports: [FontAwesomeModule],
  templateUrl: './official-raspberry-pi-image.component.html',
  styleUrl: './official-raspberry-pi-image.component.scss',
})
export class OfficialRaspberryPiImageComponent {
  public faSdCard = faSdCard
  public faDownload = faDownload

  constructor() { }
}
