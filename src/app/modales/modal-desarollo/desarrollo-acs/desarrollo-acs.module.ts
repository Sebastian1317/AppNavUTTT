import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesarrolloACSPageRoutingModule } from './desarrollo-acs-routing.module';

import { DesarrolloACSPage } from './desarrollo-acs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesarrolloACSPageRoutingModule
  ],
  declarations: [DesarrolloACSPage]
})
export class DesarrolloACSPageModule {}
