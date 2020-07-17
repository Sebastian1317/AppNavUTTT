import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTicsPage } from './modal-tics.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTicsPage
  },  {
    path: 'virtuales',
    loadChildren: () => import('./virtuales/virtuales.module').then( m => m.VirtualesPageModule)
  },
  {
    path: 'redes',
    loadChildren: () => import('./redes/redes.module').then( m => m.RedesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTicsPageRoutingModule {}
