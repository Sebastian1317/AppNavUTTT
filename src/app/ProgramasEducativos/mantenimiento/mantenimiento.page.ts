import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMantenimientoPage } from 'src/app/modales/modal-mantenimiento/modal-mantenimiento.page';
import { MantenimientoIndustrialPage } from 'src/app/modales/modal-mantenimiento/mantenimiento-industrial/mantenimiento-industrial.page';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.page.html',
  styleUrls: ['./mantenimiento.page.scss'],
})
export class MantenimientoPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  abrirModal(){
    this.modalController.create({component: ModalMantenimientoPage}).then(modalElement=>{
    modalElement.present();
  })}
  abrirModal1(){
    this.modalController.create({component: MantenimientoIndustrialPage}).then(modalElement=>{
    modalElement.present();
  })}

}
