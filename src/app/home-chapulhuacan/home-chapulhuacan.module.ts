import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeChapulhuacanPageRoutingModule } from './home-chapulhuacan-routing.module';

import { HomeChapulhuacanPage } from './home-chapulhuacan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeChapulhuacanPageRoutingModule
  ],
  declarations: [HomeChapulhuacanPage]
})
export class HomeChapulhuacanPageModule {}
