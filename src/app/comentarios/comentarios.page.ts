import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../shared/appointment.service';
import { Appointment } from '../shared/appointment';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

     formUsuarios: Appointment = {
      nombre: '',
      apellidos: '',
      escuela: '',
      carrera: '',
      comentarios: ''
  };

  constructor(
    private route: ActivatedRoute, private nav:NavController, private servicio:AppointmentService,
    private loadingController:LoadingController
  ) { }

  ngOnInit() {
  }

  async formSubmit() {
    const loading = await this.loadingController.create({
      message:  'Guardando...'
    });
    await loading.present();
    this.servicio.createUsuario(this.formUsuarios).then(() => {
      loading.dismiss();
    });
  }
}
