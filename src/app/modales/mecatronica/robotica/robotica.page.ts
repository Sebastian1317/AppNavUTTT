import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-robotica',
  templateUrl: './robotica.page.html',
  styleUrls: ['./robotica.page.scss'],
})
export class RoboticaPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalControler.dismiss();
  }
}
