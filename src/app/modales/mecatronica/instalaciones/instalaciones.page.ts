import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.page.html',
  styleUrls: ['./instalaciones.page.scss'],
})
export class InstalacionesPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalControler.dismiss();
  }

}
