import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalProcesosIndustrialesPage } from './procesos-industriales.page';

const routes: Routes = [
  {
    path: '',
    component: ModalProcesosIndustrialesPage
  },
  {
    path: 'construccionymont',
    loadChildren: () => import('./construccionymont/construccionymont.module').then( m => m.ConstruccionymontPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalProcesosIndustrialesPageRoutingModule {}
