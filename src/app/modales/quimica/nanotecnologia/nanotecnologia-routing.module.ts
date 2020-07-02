import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NanotecnologiaPage } from './nanotecnologia.page';

const routes: Routes = [
  {
    path: '',
    component: NanotecnologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NanotecnologiaPageRoutingModule {}
