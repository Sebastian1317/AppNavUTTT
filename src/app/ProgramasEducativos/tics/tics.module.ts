import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicsPageRoutingModule } from './tics-routing.module';

import { TicsPage } from './tics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicsPageRoutingModule
  ],
  declarations: [TicsPage]
})
export class TicsPageModule {}
