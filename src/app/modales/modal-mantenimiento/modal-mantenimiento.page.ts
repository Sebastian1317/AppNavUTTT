import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-mantenimiento',
  templateUrl: './modal-mantenimiento.page.html',
  styleUrls: ['./modal-mantenimiento.page.scss'],
})
export class ModalMantenimientoPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
    
  }
  closeModal(){
    this.modalControler.dismiss();
  }
  
}
  
  
  
