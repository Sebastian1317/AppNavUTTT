import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumanoPage } from './humano.page';

const routes: Routes = [
  {
    path: '',
    component: HumanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HumanoPageRoutingModule {}
