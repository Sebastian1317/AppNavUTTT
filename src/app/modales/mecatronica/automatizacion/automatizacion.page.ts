import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-automatizacion',
  templateUrl: './automatizacion.page.html',
  styleUrls: ['./automatizacion.page.scss'],
})
export class AutomatizacionPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalControler.dismiss();
  }

}
