import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaduriaPageRoutingModule } from './contaduria-routing.module';

import { ContaduriaPage } from './contaduria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaduriaPageRoutingModule
  ],
  declarations: [ContaduriaPage]
})
export class ContaduriaPageModule {}
