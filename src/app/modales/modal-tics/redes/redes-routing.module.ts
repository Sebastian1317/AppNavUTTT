import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedesPage } from './redes.page';

const routes: Routes = [
  {
    path: '',
    component: RedesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedesPageRoutingModule {}
