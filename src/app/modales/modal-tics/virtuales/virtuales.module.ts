import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualesPageRoutingModule } from './virtuales-routing.module';

import { VirtualesPage } from './virtuales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualesPageRoutingModule
  ],
  declarations: [VirtualesPage]
})
export class VirtualesPageModule {}
