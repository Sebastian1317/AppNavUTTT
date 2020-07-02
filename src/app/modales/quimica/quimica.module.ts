import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuimicaPageRoutingModule } from './quimica-routing.module';

import { ModalQuimicaPage } from './quimica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuimicaPageRoutingModule
  ],
  declarations: [ModalQuimicaPage]
})
export class QuimicaPageModule {}
