import { Component, OnInit } from '@angular/core';
import { ProyectosPage  } from '../../modales/proyectos/proyectos.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-formacionproyectos',
  templateUrl: './formacionproyectos.page.html',
  styleUrls: ['./formacionproyectos.page.scss'],
})
export class FormacionproyectosPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  abrirModal(){
    this.modalController.create({component: ProyectosPage}).then(modalElement=>{
      modalElement.present();
    })
  }
}










  

  

 













  



