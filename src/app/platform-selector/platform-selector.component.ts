import { Component } from '@angular/core';
import { faWindows, faApple, faDocker, faRaspberryPi, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

declare var gtag;

@Component({
  selector: 'app-platform-selector',
  templateUrl: './platform-selector.component.html',
  styleUrls: ['./platform-selector.component.scss'],
})
export class PlatformSelectorComponent {
  public faCaretUp = faCaretUp;

  public faWindows = faWindows;
  public faApple = faApple;
  public faDocker = faDocker;
  public faRaspberryPi = faRaspberryPi;
  public faLinux = faLinux;

  public selectedPlatform = '';

  public platforms = [
    {
      key: 'pi',
      icon: faRaspberryPi,
    },
    {
      key: 'linux',
      icon: faLinux,
    },
    {
      key: 'macos',
      icon: faApple,
    },
    {
      key: 'docker',
      icon: faDocker,
    },
    {
      key: 'windows',
      icon: faWindows,
    },
  ];

  constructor() { }

  selectPlatform(platform) {
    if (platform.key === this.selectedPlatform) {
      this.selectedPlatform = '';
      return;
    }
    this.selectedPlatform = platform.key;

    gtag('event', platform.key, {
      event_category: 'Platform Selected',
    });
  }

}
