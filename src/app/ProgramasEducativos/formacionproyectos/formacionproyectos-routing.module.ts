import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormacionproyectosPage } from './formacionproyectos.page';

const routes: Routes = [
  {
    path: '',
    component: FormacionproyectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormacionproyectosPageRoutingModule {}
