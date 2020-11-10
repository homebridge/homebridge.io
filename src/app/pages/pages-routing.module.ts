import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HowToInstallHomebridgeComponent } from './how-to-install-homebridge/how-to-install-homebridge.component';
import { OfficialRaspberryPiImageComponent } from './official-raspberry-pi-image/official-raspberry-pi-image.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
