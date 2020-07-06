import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-humano',
  templateUrl: './humano.page.html',
  styleUrls: ['./humano.page.scss'],
})
export class HumanoPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
