import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMantenimientoPageRoutingModule } from './modal-mantenimiento-routing.module';

import { ModalMantenimientoPage } from './modal-mantenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMantenimientoPageRoutingModule
  ],
  declarations: [ModalMantenimientoPage]
})
export class ModalMantenimientoPageModule {}
