import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgriculturaPage } from './agricultura.page';

const routes: Routes = [
  {
    path: '',
    component: AgriculturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgriculturaPageRoutingModule {}
