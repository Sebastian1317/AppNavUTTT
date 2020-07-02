import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnologiaambientalPage } from './tecnologiaambiental.page';

const routes: Routes = [
  {
    path: '',
    component: TecnologiaambientalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnologiaambientalPageRoutingModule {}
