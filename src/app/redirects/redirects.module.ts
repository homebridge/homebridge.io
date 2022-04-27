import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RedirectsRoutingModule } from './redirects-routing.module';
import { RedirectsComponent } from './redirects.component';


@NgModule({
  declarations: [
    RedirectsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RedirectsRoutingModule
  ]
})
export class RedirectsModule { }
