import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMixtoPageRoutingModule } from './home-mixto-routing.module';

import { HomeMixtoPage } from './home-mixto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMixtoPageRoutingModule
  ],
  declarations: [HomeMixtoPage]
})
export class HomeMixtoPageModule {}
