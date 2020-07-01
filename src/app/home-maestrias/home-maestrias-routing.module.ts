import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMaestriasPage } from './home-maestrias.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMaestriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMaestriasPageRoutingModule {}
