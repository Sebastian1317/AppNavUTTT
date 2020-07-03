import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-procesos-industriales',
  templateUrl: './procesos-industriales.page.html',
  styleUrls: ['./procesos-industriales.page.scss'],
})
export class ModalProcesosIndustrialesPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
    
  }
  closeModal(){
    this.modalControler.dismiss();
  }
  
}