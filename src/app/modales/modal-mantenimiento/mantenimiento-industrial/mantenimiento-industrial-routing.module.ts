import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoIndustrialPage } from './mantenimiento-industrial.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoIndustrialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoIndustrialPageRoutingModule {}
