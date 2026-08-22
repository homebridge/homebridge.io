import type { Routes } from '@angular/router'

import { FeaturesComponent } from './pages/features/features.component'
import { HowToInstallHomebridgeComponent } from './pages/how-to-install-homebridge/how-to-install-homebridge.component'
import { OfficialRaspberryPiImageComponent } from './pages/official-raspberry-pi-image/official-raspberry-pi-image.component'

export const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
  },
  {
    path: 'how-to-install-homebridge',
    component: HowToInstallHomebridgeComponent,
  },
  {
    path: 'raspberry-pi-image',
    component: OfficialRaspberryPiImageComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
]
