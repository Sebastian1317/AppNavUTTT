import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesarollodeNegociosPageRoutingModule } from './desarollode-negocios-routing.module';

import { DesarollodeNegociosPage } from './desarollode-negocios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesarollodeNegociosPageRoutingModule
  ],
  declarations: [DesarollodeNegociosPage]
})
export class DesarollodeNegociosPageModule {}
