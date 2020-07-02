import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnologiaambientalPageRoutingModule } from './tecnologiaambiental-routing.module';

import { TecnologiaambientalPage } from './tecnologiaambiental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnologiaambientalPageRoutingModule
  ],
  declarations: [TecnologiaambientalPage]
})
export class TecnologiaambientalPageModule {}
