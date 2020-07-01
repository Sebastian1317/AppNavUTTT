import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeChapulhuacanPage } from './home-chapulhuacan.page';

const routes: Routes = [
  {
    path: '',
    component: HomeChapulhuacanPage
  },  {
    path: 'agricultura',
    loadChildren: () => import('./agricultura/agricultura.module').then( m => m.AgriculturaPageModule)
  },
  {
    path: 'contaduria',
    loadChildren: () => import('./contaduria/contaduria.module').then( m => m.ContaduriaPageModule)
  },
  {
    path: 'desarrollodenegocios',
    loadChildren: () => import('./desarrollodenegocios/desarrollodenegocios.module').then( m => m.DesarrollodenegociosPageModule)
  },
  {
    path: 'tics',
    loadChildren: () => import('./tics/tics.module').then( m => m.TicsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeChapulhuacanPageRoutingModule {}
