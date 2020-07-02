import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoboticaPageRoutingModule } from './robotica-routing.module';

import { RoboticaPage } from './robotica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoboticaPageRoutingModule
  ],
  declarations: [RoboticaPage]
})
export class RoboticaPageModule {}
