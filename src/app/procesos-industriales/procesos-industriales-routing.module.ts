import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesosIndustrialesPage } from './procesos-industriales.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesosIndustrialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesosIndustrialesPageRoutingModule {}
