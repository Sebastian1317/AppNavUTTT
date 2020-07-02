import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalQuimicaPage } from './quimica.page';

const routes: Routes = [
  {
    path: '',
    component: ModalQuimicaPage
  },
  {
    path: 'nanotecnologia',
    loadChildren: () => import('./nanotecnologia/nanotecnologia.module').then( m => m.NanotecnologiaPageModule)
  },
  {
    path: 'tecnologiaambiental',
    loadChildren: () => import('./tecnologiaambiental/tecnologiaambiental.module').then( m => m.TecnologiaambientalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuimicaPageRoutingModule {}
