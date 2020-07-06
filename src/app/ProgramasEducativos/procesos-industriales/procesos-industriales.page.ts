import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalProcesosIndustrialesPage } from 'src/app/modales/procesos-industriales/procesos-industriales.page';
import { ConstruccionymontPage } from 'src/app/modales/procesos-industriales/construccionymont/construccionymont.page';

@Component({
  selector: 'app-procesos-industriales',
  templateUrl: './procesos-industriales.page.html',
  styleUrls: ['./procesos-industriales.page.scss'],
})
export class ProcesosIndustrialesPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  abrirModalPIAM(){
    this.modalController.create({component: ModalProcesosIndustrialesPage}).then(modalElement=>{
    modalElement.present();
  })}
  abrirModalCMPIAH(){
    this.modalController.create({component: ConstruccionymontPage}).then(modalElement=>{
    modalElement.present();
  })}

}
