import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ModalTicsPage}from '../../modales/modal-tics/modal-tics.page'

import { RedesPage } from 'src/app/modales/modal-tics/redes/redes.page';
import { VirtualesPage } from 'src/app/modales/modal-tics/virtuales/virtuales.page';

@Component({
  selector: 'app-tics',
  templateUrl: './tics.page.html',
  styleUrls: ['./tics.page.scss'],
})
export class TicsPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  abrirModalADSM(){
    this.modalController.create({component: ModalTicsPage}).then(modalElement=>{
    modalElement.present();
  })}
  abrirModalAEVND(){
    this.modalController.create({component: RedesPage}).then(modalElement=>{
    modalElement.present();
  })}
  abrirModalAIRD(){
    this.modalController.create({component: VirtualesPage}).then(modalElement=>{
    modalElement.present();
  })}

}
