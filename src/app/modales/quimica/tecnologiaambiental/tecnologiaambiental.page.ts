import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tecnologiaambiental',
  templateUrl: './tecnologiaambiental.page.html',
  styleUrls: ['./tecnologiaambiental.page.scss'],
})
export class TecnologiaambientalPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }

}