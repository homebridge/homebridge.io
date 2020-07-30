import { Component, OnInit } from '@angular/core';
import { faHeart, faSdCard, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  public faHeart = faHeart;
  public faSdCard = faSdCard;
  public faDownload = faDownload;

  constructor() { }

  ngOnInit(): void {
  }

}
