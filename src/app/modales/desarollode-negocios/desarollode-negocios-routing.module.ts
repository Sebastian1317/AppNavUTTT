import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesarollodeNegociosPage } from './desarollode-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: DesarollodeNegociosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesarollodeNegociosPageRoutingModule {}
