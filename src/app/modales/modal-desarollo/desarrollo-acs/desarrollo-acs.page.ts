import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-desarrollo-acs',
  templateUrl: './desarrollo-acs.page.html',
  styleUrls: ['./desarrollo-acs.page.scss'],
})
export class DesarrolloACSPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalControler.dismiss();
  }

}
