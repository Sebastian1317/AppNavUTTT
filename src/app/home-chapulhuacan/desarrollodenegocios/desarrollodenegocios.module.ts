import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesarrollodenegociosPageRoutingModule } from './desarrollodenegocios-routing.module';

import { DesarrollodenegociosPage } from './desarrollodenegocios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesarrollodenegociosPageRoutingModule
  ],
  declarations: [DesarrollodenegociosPage]
})
export class DesarrollodenegociosPageModule {}
