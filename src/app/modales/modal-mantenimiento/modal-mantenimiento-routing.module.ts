import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMantenimientoPage } from './modal-mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMantenimientoPage
  },  {
    path: 'mantenimiento-industrial',
    loadChildren: () => import('./mantenimiento-industrial/mantenimiento-industrial.module').then( m => m.MantenimientoIndustrialPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMantenimientoPageRoutingModule {}
