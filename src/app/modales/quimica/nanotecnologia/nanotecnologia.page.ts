import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-nanotecnologia',
  templateUrl: './nanotecnologia.page.html',
  styleUrls: ['./nanotecnologia.page.scss'],
})
export class NanotecnologiaPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }

}
