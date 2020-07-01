import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientoIndustrialPageRoutingModule } from './mantenimiento-industrial-routing.module';

import { MantenimientoIndustrialPage } from './mantenimiento-industrial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenimientoIndustrialPageRoutingModule
  ],
  declarations: [MantenimientoIndustrialPage]
})
export class MantenimientoIndustrialPageModule {}
