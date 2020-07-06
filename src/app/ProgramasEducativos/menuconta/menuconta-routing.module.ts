import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenucontaPage } from './menuconta.page';

const routes: Routes = [
  {
    path: '',
    component: MenucontaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenucontaPageRoutingModule {}
