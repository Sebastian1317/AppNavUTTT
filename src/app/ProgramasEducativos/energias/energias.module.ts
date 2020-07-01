import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnergiasPageRoutingModule } from './energias-routing.module';

import { EnergiasPage } from './energias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnergiasPageRoutingModule
  ],
  declarations: [EnergiasPage]
})
export class EnergiasPageModule {}
