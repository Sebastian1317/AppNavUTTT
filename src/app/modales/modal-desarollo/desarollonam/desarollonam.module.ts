import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesarollonamPageRoutingModule } from './desarollonam-routing.module';

import { DesarollonamPage } from './desarollonam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesarollonamPageRoutingModule
  ],
  declarations: [DesarollonamPage]
})
export class DesarollonamPageModule {}
