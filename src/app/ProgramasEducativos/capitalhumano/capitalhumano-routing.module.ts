import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapitalhumanoPage } from './capitalhumano.page';

const routes: Routes = [
  {
    path: '',
    component: CapitalhumanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapitalhumanoPageRoutingModule {}
