import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedesPageRoutingModule } from './redes-routing.module';

import { RedesPage } from './redes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedesPageRoutingModule
  ],
  declarations: [RedesPage]
})
export class RedesPageModule {}
