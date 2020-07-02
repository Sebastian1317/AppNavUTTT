import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesarolloinmPageRoutingModule } from './desarolloinm-routing.module';

import { DesarolloinmPage } from './desarolloinm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesarolloinmPageRoutingModule
  ],
  declarations: [DesarolloinmPage]
})
export class DesarolloinmPageModule {}
