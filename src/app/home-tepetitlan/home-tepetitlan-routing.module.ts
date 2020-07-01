import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTepetitlanPage } from './home-tepetitlan.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTepetitlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTepetitlanPageRoutingModule {}
