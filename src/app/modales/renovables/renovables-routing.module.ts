import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenovablesPage } from './renovables.page';

const routes: Routes = [
  {
    path: '',
    component: RenovablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenovablesPageRoutingModule {}
