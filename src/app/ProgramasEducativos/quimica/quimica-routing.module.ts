import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuimicaPage } from './quimica.page';

const routes: Routes = [
  {
    path: '',
    component: QuimicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuimicaPageRoutingModule {}
