import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.page.html',
  styleUrls: ['./mantenimiento.page.scss'],
})
export class MantenimientoPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

}
