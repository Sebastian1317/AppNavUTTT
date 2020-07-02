import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-desarollo',
  templateUrl: './modal-desarollo.page.html',
  styleUrls: ['./modal-desarollo.page.scss'],
})
export class ModalDesarolloPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalControler.dismiss();
  }

}
