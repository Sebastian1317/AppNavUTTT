import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalQuimicaPage } from 'src/app/modales/quimica/quimica.page';
import { NanotecnologiaPage } from 'src/app/modales/quimica/nanotecnologia/nanotecnologia.page';
import { TecnologiaambientalPage } from 'src/app/modales/quimica/tecnologiaambiental/tecnologiaambiental.page';

@Component({
  selector: 'app-quimica',
  templateUrl: './quimica.page.html',
  styleUrls: ['./quimica.page.scss'],
})
export class QuimicaPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  abrirModalQAI(){
    this.modalController.create({component: ModalQuimicaPage}).then(modalElement=>{
    modalElement.present();
  })}
  abrirModalNAM(){
    this.modalController.create({component: NanotecnologiaPage}).then(modalElement=>{
    modalElement.present();
  })}
  abrirModalQATA(){
    this.modalController.create({component: TecnologiaambientalPage}).then(modalElement=>{
    modalElement.present();
  })}

}
