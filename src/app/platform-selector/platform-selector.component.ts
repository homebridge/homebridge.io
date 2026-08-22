import { NgClass } from '@angular/common'
import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faApple, faDocker, faLinux, faRaspberryPi, faWindows } from '@fortawesome/free-brands-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-platform-selector',
  imports: [
    NgClass,
    FontAwesomeModule,
  ],
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
  ]

  constructor() { }

  selectPlatform(platform) {
    if (platform.key === this.selectedPlatform) {
      this.selectedPlatform = ''
      return
    }
    this.selectedPlatform = platform.key
  }
}
