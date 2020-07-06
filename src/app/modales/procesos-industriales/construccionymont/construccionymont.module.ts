import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstruccionymontPageRoutingModule } from './construccionymont-routing.module';

import { ConstruccionymontPage } from './construccionymont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstruccionymontPageRoutingModule
  ],
  declarations: [ConstruccionymontPage]
})
export class ConstruccionymontPageModule {}
