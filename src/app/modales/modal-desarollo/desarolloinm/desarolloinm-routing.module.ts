import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesarolloinmPage } from './desarolloinm.page';

const routes: Routes = [
  {
    path: '',
    component: DesarolloinmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesarolloinmPageRoutingModule {}
