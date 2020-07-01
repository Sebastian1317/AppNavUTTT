import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMantenimientoPage } from './modal-mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMantenimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMantenimientoPageRoutingModule {}
