import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Noticia4Page } from './noticia4.page';

const routes: Routes = [
  {
    path: '',
    component: Noticia4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Noticia4PageRoutingModule {}
