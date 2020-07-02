import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstalacionesPage } from './instalaciones.page';

const routes: Routes = [
  {
    path: '',
    component: InstalacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstalacionesPageRoutingModule {}
