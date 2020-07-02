import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomatizacionPageRoutingModule } from './automatizacion-routing.module';

import { AutomatizacionPage } from './automatizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutomatizacionPageRoutingModule
  ],
  declarations: [AutomatizacionPage]
})
export class AutomatizacionPageModule {}
