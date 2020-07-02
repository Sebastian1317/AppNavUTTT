import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDesarolloPage } from 'src/app/modales/modal-desarollo/modal-desarollo.page';
import { DesarolloinmPage } from 'src/app/modales/modal-desarollo/desarolloinm/desarolloinm.page';
import { DesarollonamPage } from 'src/app/modales/modal-desarollo/desarollonam/desarollonam.page';
import { DesarrolloACSPage } from 'src/app/modales/modal-desarollo/desarrollo-acs/desarrollo-acs.page';


@Component({
  selector: 'app-desarollode-negocios',
  templateUrl: './desarollode-negocios.page.html',
  styleUrls: ['./desarollode-negocios.page.scss'],
})
export class DesarollodeNegociosPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  abrirModalLTT(){
    this.modalController.create({component: ModalDesarolloPage}).then(modalElement=>{
    modalElement.present();
  })}
  abrirModalACS(){
    this.modalController.create({component: DesarrolloACSPage}).then(modalElement=>{
    modalElement.present();
  })}
  abrirModalINM(){
    this.modalController.create({component: DesarolloinmPage}).then(modalElement=>{
    modalElement.present();
  })}
  abrirModalNAM(){
    this.modalController.create({component: DesarollonamPage}).then(modalElement=>{
    modalElement.present();
  })}
}
