import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTicsPageRoutingModule } from './modal-tics-routing.module';

import { ModalTicsPage } from './modal-tics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTicsPageRoutingModule
  ],
  declarations: [ModalTicsPage]
})
export class ModalTicsPageModule {}
