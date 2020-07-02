import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDesarolloPageRoutingModule } from './modal-desarollo-routing.module';

import { ModalDesarolloPage } from './modal-desarollo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDesarolloPageRoutingModule
  ],
  declarations: [ModalDesarolloPage]
})
export class ModalDesarolloPageModule {}
