import { enableProdMode, importProvidersFrom, provideZoneChangeDetection } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app/app-routing.module'
import { AppComponent } from './app/app.component'
import { PagesModule } from './app/pages/pages.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [provideZoneChangeDetection(), importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, PagesModule, AppRoutingModule)],
})
  .catch(err => console.error(err))
