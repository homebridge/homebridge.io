import { Component } from '@angular/core';
import { faSdCard, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-official-raspberry-pi-image',
  templateUrl: './official-raspberry-pi-image.component.html',
  styleUrls: ['./official-raspberry-pi-image.component.scss'],
})
export class OfficialRaspberryPiImageComponent {
  public faSdCard = faSdCard;
  public faDownload = faDownload;

  constructor() { }

}
