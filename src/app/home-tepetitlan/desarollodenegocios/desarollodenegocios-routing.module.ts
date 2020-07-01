import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesarollodenegociosPage } from './desarollodenegocios.page';

const routes: Routes = [
  {
    path: '',
    component: DesarollodenegociosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesarollodenegociosPageRoutingModule {}
