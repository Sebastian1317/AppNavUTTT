import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesarollodenegociosPageRoutingModule } from './desarollodenegocios-routing.module';

import { DesarollodenegociosPage } from './desarollodenegocios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesarollodenegociosPageRoutingModule
  ],
  declarations: [DesarollodenegociosPage]
})
export class DesarollodenegociosPageModule {}
