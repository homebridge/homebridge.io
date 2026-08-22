import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { Component } from '@angular/core'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import {
  faApple,
  faDocker,
  faLinux,
  faRaspberryPi,
  faWindows,
} from '@fortawesome/free-brands-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

interface Platform {
  key: string
  icon: IconDefinition
}

@Component({
  selector: 'app-platform-selector',
  imports: [FaIconComponent],
  templateUrl: './platform-selector.component.html',
  styleUrl: './platform-selector.component.scss',
})
export class PlatformSelectorComponent {
  public faCaretUp = faCaretUp

  public faWindows = faWindows
  public faApple = faApple
  public faDocker = faDocker
  public faRaspberryPi = faRaspberryPi
  public faLinux = faLinux

  public selectedPlatform = ''

  public platforms: Platform[] = [
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
  ]

  selectPlatform(platform: Platform) {
    if (platform.key === this.selectedPlatform) {
      this.selectedPlatform = ''
      return
    }
    this.selectedPlatform = platform.key
  }
}
