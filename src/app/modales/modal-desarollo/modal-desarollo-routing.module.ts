import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDesarolloPage } from './modal-desarollo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDesarolloPage
  },
  {
    path: 'desarrollo-acs',
    loadChildren: () => import('./desarrollo-acs/desarrollo-acs.module').then( m => m.DesarrolloACSPageModule)
  },
  {
    path: 'desarolloinm',
    loadChildren: () => import('./desarolloinm/desarolloinm.module').then( m => m.DesarolloinmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDesarolloPageRoutingModule {}
