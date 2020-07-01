import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMixtoPage } from './home-mixto.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMixtoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMixtoPageRoutingModule {}
