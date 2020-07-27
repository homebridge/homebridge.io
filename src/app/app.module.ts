import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlatformSelectorComponent } from './platform-selector/platform-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindPluginComponent } from './find-plugin/find-plugin.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatformSelectorComponent,
    FindPluginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
