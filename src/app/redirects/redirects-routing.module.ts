import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RedirectsComponent } from './redirects.component';

const routes: Routes = [
  {
    path: 'w/:key',
    component: RedirectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedirectsRoutingModule { }
