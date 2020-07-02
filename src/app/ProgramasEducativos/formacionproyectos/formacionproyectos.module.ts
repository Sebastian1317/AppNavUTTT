import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormacionproyectosPageRoutingModule } from './formacionproyectos-routing.module';

import { FormacionproyectosPage } from './formacionproyectos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormacionproyectosPageRoutingModule
  ],
  declarations: [FormacionproyectosPage]
})
export class FormacionproyectosPageModule {}
