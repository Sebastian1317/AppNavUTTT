import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTepetitlanPageRoutingModule } from './home-tepetitlan-routing.module';

import { HomeTepetitlanPage } from './home-tepetitlan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTepetitlanPageRoutingModule
  ],
  declarations: [HomeTepetitlanPage]
})
export class HomeTepetitlanPageModule {}
