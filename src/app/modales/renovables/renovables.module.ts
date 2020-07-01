import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenovablesPageRoutingModule } from './renovables-routing.module';

import { RenovablesPage } from './renovables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenovablesPageRoutingModule
  ],
  declarations: [RenovablesPage]
})
export class RenovablesPageModule {}
