import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-desarolloinm',
  templateUrl: './desarolloinm.page.html',
  styleUrls: ['./desarolloinm.page.scss'],
})
export class DesarolloinmPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalControler.dismiss();
  }
}
