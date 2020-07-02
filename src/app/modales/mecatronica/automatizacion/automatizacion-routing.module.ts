import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomatizacionPage } from './automatizacion.page';

const routes: Routes = [
  {
    path: '',
    component: AutomatizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomatizacionPageRoutingModule {}
