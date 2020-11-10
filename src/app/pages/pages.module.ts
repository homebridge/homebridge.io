import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule } from 'ngx-markdown';

import { PagesRoutingModule } from './pages-routing.module';
import { HowToInstallHomebridgeComponent } from './how-to-install-homebridge/how-to-install-homebridge.component';
import { FeaturesComponent } from './features/features.component';
import { FindPluginComponent } from './features/find-plugin/find-plugin.component';
import { OfficialRaspberryPiImageComponent } from './official-raspberry-pi-image/official-raspberry-pi-image.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    FindPluginComponent,
    HowToInstallHomebridgeComponent,
    OfficialRaspberryPiImageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MarkdownModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    FontAwesomeModule,
  ],
})
export class PagesModule { }
