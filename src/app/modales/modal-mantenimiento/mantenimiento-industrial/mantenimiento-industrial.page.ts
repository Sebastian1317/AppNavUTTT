import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mantenimiento-industrial',
  templateUrl: './mantenimiento-industrial.page.html',
  styleUrls: ['./mantenimiento-industrial.page.scss'],
})
export class MantenimientoIndustrialPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalControler.dismiss();

}
}
