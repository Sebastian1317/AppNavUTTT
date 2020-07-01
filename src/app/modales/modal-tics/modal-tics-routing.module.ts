import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTicsPage } from './modal-tics.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTicsPageRoutingModule {}
