import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeChapulhuacanPage } from './home-chapulhuacan.page';

const routes: Routes = [
  {
    path: '',
    component: HomeChapulhuacanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeChapulhuacanPageRoutingModule {}
