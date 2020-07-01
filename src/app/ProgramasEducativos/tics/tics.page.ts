import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tics',
  templateUrl: './tics.page.html',
  styleUrls: ['./tics.page.scss'],
})
export class TicsPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  

}
