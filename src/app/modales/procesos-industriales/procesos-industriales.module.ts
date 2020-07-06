import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalProcesosIndustrialesPageRoutingModule } from './procesos-industriales-routing.module';

import { ModalProcesosIndustrialesPage } from './procesos-industriales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalProcesosIndustrialesPageRoutingModule
  ],
  declarations: [ModalProcesosIndustrialesPage]
})
export class ModalProcesosIndustrialesPageModule {}
