import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quimica',
  templateUrl: './quimica.page.html',
  styleUrls: ['./quimica.page.scss'],
})
export class ModalQuimicaPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
    
  }
  closeModal(){
    this.modalControler.dismiss();
  }
  
}
  
