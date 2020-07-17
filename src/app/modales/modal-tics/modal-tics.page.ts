import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-tics',
  templateUrl: './modal-tics.page.html',
  styleUrls: ['./modal-tics.page.scss'],
})
export class ModalTicsPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
    
  }
  closeModal(){
    this.modalControler.dismiss();
  }
  
}
