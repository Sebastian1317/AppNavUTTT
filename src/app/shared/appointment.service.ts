import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  listaUsuarios: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { }

  create(apt: Appointment) {
    return this.listaUsuarios.push({
      nombre: apt.nombre,
      apellidos: apt.apellidos,
      escuela: apt.escuela,
      carrera: apt.carrera,
      comentarios: apt.comentarios
    })
  }
}
