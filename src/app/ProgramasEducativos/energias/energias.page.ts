import { Component, OnInit } from '@angular/core';
import { RenovablesPage  } from '../../modales/renovables/renovables.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-energias',
  templateUrl: './energias.page.html',
  styleUrls: ['./energias.page.scss'],
})
export class EnergiasPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  abrirModal(){
    this.modalController.create({component: RenovablesPage}).then(modalElement=>{
      modalElement.present();
    })
  }

}











  


