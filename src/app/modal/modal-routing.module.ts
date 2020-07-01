import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPage } from './modal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  },  {
    path: 'noticia1',
    loadChildren: () => import('./noticia1/noticia1.module').then( m => m.Noticia1PageModule)
  },
  {
    path: 'noticia2',
    loadChildren: () => import('./noticia2/noticia2.module').then( m => m.Noticia2PageModule)
  },
  {
    path: 'noticia3',
    loadChildren: () => import('./noticia3/noticia3.module').then( m => m.Noticia3PageModule)
  },
  {
    path: 'noticia4',
    loadChildren: () => import('./noticia4/noticia4.module').then( m => m.Noticia4PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {}
