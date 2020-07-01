import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Noticia1Page } from '../modal/noticia1/noticia1.page';
import { Noticia2Page } from '../modal/noticia2/noticia2.page';
import { Noticia3Page } from '../modal/noticia3/noticia3.page';
import { Noticia4Page } from '../modal/noticia4/noticia4.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,private modalController:ModalController) {}
  guardar(){
    return this.router.navigateByUrl('/pet');
    
  }
  AbrirNoticia1(){this.modalController.create({component: Noticia1Page}).then(modalElement=>{
    modalElement.present();
  })}

  AbrirNoticia2(){this.modalController.create({component: Noticia2Page}).then(modalElement=>{
    modalElement.present();
  })}

  AbrirNoticia3(){this.modalController.create({component: Noticia3Page}).then(modalElement=>{
    modalElement.present();
  })}

  AbrirNoticia4(){this.modalController.create({component: Noticia4Page}).then(modalElement=>{
    modalElement.present();
  })}


}
