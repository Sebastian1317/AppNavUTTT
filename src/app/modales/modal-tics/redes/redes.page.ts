import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.page.html',
  styleUrls: ['./redes.page.scss'],
})
export class RedesPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }

}
