import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnergiasPage } from './energias.page';

const routes: Routes = [
  {
    path: '',
    component: EnergiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnergiasPageRoutingModule {}
