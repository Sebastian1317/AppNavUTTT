import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuimicaPageRoutingModule } from './quimica-routing.module';

import { QuimicaPage } from './quimica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuimicaPageRoutingModule
  ],
  declarations: [QuimicaPage]
})
export class QuimicaPageModule {}
