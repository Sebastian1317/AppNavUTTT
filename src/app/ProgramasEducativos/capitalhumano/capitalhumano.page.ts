import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HumanoPage  } from '../../modales/humano/humano.page';

@Component({
  selector: 'app-capitalhumano',
  templateUrl: './capitalhumano.page.html',
  styleUrls: ['./capitalhumano.page.scss'],
})
export class CapitalhumanoPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  abrirModal(){
    this.modalController.create({component: HumanoPage}).then(modalElement=>{
      modalElement.present();
    })
  }
}
















 

 