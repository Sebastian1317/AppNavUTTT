import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-construccionymont',
  templateUrl: './construccionymont.page.html',
  styleUrls: ['./construccionymont.page.scss'],
})
export class ConstruccionymontPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
    
  }
  closeModal(){
    this.modalControler.dismiss();
  }
  
}