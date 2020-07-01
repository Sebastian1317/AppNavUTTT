import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HumanoPageRoutingModule } from './humano-routing.module';

import { HumanoPage } from './humano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HumanoPageRoutingModule
  ],
  declarations: [HumanoPage]
})
export class HumanoPageModule {}
