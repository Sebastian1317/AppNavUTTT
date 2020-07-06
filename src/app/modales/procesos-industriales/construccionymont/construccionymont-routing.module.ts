import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstruccionymontPage } from './construccionymont.page';

const routes: Routes = [
  {
    path: '',
    component: ConstruccionymontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstruccionymontPageRoutingModule {}
