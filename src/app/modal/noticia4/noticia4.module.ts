import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Noticia4PageRoutingModule } from './noticia4-routing.module';

import { Noticia4Page } from './noticia4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Noticia4PageRoutingModule
  ],
  declarations: [Noticia4Page]
})
export class Noticia4PageModule {}
