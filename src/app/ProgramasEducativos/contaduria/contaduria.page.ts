import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContaPage  } from '../../modales/conta/conta.page';

@Component({
  selector: 'app-contaduria',
  templateUrl: './contaduria.page.html',
  styleUrls: ['./contaduria.page.scss'],
})
export class ContaduriaPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  abrirModal(){
    this.modalController.create({component: ContaPage}).then(modalElement=>{
      modalElement.present();
    })
  }

}










 

 