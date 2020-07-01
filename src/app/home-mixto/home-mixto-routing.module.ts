import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMixtoPage } from './home-mixto.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMixtoPage
  },  {
    path: 'mecatronica',
    loadChildren: () => import('./mecatronica/mecatronica.module').then( m => m.MecatronicaPageModule)
  },
  {
    path: 'quimica',
    loadChildren: () => import('./quimica/quimica.module').then( m => m.QuimicaPageModule)
  },
  {
    path: 'contaduria',
    loadChildren: () => import('./contaduria/contaduria.module').then( m => m.ContaduriaPageModule)
  },
  {
    path: 'desarollodenegocios',
    loadChildren: () => import('./desarollodenegocios/desarollodenegocios.module').then( m => m.DesarollodenegociosPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMixtoPageRoutingModule {}
