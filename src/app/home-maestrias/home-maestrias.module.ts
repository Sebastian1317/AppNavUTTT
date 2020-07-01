import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMaestriasPageRoutingModule } from './home-maestrias-routing.module';

import { HomeMaestriasPage } from './home-maestrias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMaestriasPageRoutingModule
  ],
  declarations: [HomeMaestriasPage]
})
export class HomeMaestriasPageModule {}
