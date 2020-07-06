import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenucontaPageRoutingModule } from './menuconta-routing.module';

import { MenucontaPage } from './menuconta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenucontaPageRoutingModule
  ],
  declarations: [MenucontaPage]
})
export class MenucontaPageModule {}
