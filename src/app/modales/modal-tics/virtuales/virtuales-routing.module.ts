import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualesPage } from './virtuales.page';

const routes: Routes = [
  {
    path: '',
    component: VirtualesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualesPageRoutingModule {}
