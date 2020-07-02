import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaduriaPage } from './contaduria.page';

const routes: Routes = [
  {
    path: '',
    component: ContaduriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaduriaPageRoutingModule {}
