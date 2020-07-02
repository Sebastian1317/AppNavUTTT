import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTepetitlanPage } from './home-tepetitlan.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTepetitlanPage
  },  {
    path: 'agricultura',
    loadChildren: () => import('./agricultura/agricultura.module').then( m => m.AgriculturaPageModule)
  },
  {
    path: 'mantenimiento',
    loadChildren: () => import('./mantenimiento/mantenimiento.module').then( m => m.MantenimientoPageModule)
  },
  {
    path: 'desarollodenegocios',
    loadChildren: () => import('./desarollodenegocios/desarollodenegocios.module').then( m => m.DesarollodenegociosPageModule)
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
export class HomeTepetitlanPageRoutingModule {}
