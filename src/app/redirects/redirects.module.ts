import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedirectsRoutingModule } from './redirects-routing.module';
import { RedirectsComponent } from './redirects.component';


@NgModule({
  declarations: [
    RedirectsComponent
  ],
  imports: [
    CommonModule,
    RedirectsRoutingModule
  ]
})
export class RedirectsModule { }
