import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesarrollodenegociosPage } from './desarrollodenegocios.page';

const routes: Routes = [
  {
    path: '',
    component: DesarrollodenegociosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesarrollodenegociosPageRoutingModule {}
