import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesarollonamPage } from './desarollonam.page';

const routes: Routes = [
  {
    path: '',
    component: DesarollonamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesarollonamPageRoutingModule {}
