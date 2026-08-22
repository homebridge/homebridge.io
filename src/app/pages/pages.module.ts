import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { FeaturesComponent } from './features/features.component'
import { FindPluginComponent } from './features/find-plugin/find-plugin.component'
import { HowToInstallHomebridgeComponent } from './how-to-install-homebridge/how-to-install-homebridge.component'
import { OfficialRaspberryPiImageComponent } from './official-raspberry-pi-image/official-raspberry-pi-image.component'
import { PagesRoutingModule } from './pages-routing.module'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    FeaturesComponent,
    FindPluginComponent,
    HowToInstallHomebridgeComponent,
    OfficialRaspberryPiImageComponent,
  ],
})
export class PagesModule { }
