import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.page.html',
  styleUrls: ['./proyectos.page.scss'],
})
export class ProyectosPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
    
  }
  closeModal(){
    this.modalControler.dismiss();
  }

}
