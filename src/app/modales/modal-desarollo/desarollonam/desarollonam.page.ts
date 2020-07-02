import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-desarollonam',
  templateUrl: './desarollonam.page.html',
  styleUrls: ['./desarollonam.page.scss'],
})
export class DesarollonamPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalControler.dismiss();
  }
}
