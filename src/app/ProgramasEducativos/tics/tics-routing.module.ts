import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicsPage } from './tics.page';

const routes: Routes = [
  {
    path: '',
    component: TicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicsPageRoutingModule {}
