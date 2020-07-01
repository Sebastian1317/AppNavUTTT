import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {} from ''

@Component({
  selector: 'app-tics',
  templateUrl: './tics.page.html',
  styleUrls: ['./tics.page.scss'],
})
export class TicsPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  abrirModal(){
    this.modalController.create({component: ""}).then(modalElement=>{
    modalElement.present();
  })}

}
