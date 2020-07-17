import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-virtuales',
  templateUrl: './virtuales.page.html',
  styleUrls: ['./virtuales.page.scss'],
})
export class VirtualesPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }

}
