import { Component } from '@angular/core';
import { faSdCard, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-official-raspberry-pi-image',
  templateUrl: './official-raspberry-pi-image.component.html',
  styleUrls: ['./official-raspberry-pi-image.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule],
})
export class OfficialRaspberryPiImageComponent {
  public faSdCard = faSdCard;
  public faDownload = faDownload;

  constructor() { }

}
