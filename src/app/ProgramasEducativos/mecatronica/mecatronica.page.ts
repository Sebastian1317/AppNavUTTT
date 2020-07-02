import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AutomatizacionPage } from 'src/app/modales/mecatronica/automatizacion/automatizacion.page';
import { InstalacionesPage } from 'src/app/modales/mecatronica/instalaciones/instalaciones.page';
import { RoboticaPage } from 'src/app/modales/mecatronica/robotica/robotica.page';

@Component({
  selector: 'app-mecatronica',
  templateUrl: './mecatronica.page.html',
  styleUrls: ['./mecatronica.page.scss'],
})
export class MecatronicaPage implements OnInit {

  constructor(private router: Router,private modalController:ModalController) { }

  ngOnInit() {
  }

  AbrirMecaInstalaciones(){
      this.modalController.create({component: InstalacionesPage}).then(modalElement=>{
      modalElement.present();
  })
}

AbrirMecaAutomatizacion(){
  this.modalController.create({component: AutomatizacionPage}).then(modalElement=>{
  modalElement.present();
})
}

AbrirMecaRobotica(){
  this.modalController.create({component: RoboticaPage}).then(modalElement=>{
  modalElement.present();
})
}
}
