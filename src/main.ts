import { enableProdMode, importProvidersFrom, provideZoneChangeDetection } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app/app-routing.module'
import { AppComponent } from './app/app.component'
import { PagesModule } from './app/pages/pages.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [provideZoneChangeDetection(), importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule, PagesModule, AppRoutingModule)],
})
  .catch(err => console.error(err))
