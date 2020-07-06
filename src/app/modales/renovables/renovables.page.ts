import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'app-renovables',
  templateUrl: './renovables.page.html',
  styleUrls: ['./renovables.page.scss'],
})
export class RenovablesPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
