import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesosIndustrialesPageRoutingModule } from './procesos-industriales-routing.module';

import { ProcesosIndustrialesPage } from './procesos-industriales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesosIndustrialesPageRoutingModule
  ],
  declarations: [ProcesosIndustrialesPage]
})
export class ProcesosIndustrialesPageModule {}
