import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  listaUsuarios: AngularFireList<any>;
  usuarioRefer: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  createUsuario(apt: Appointment) {
    return this.listaUsuarios.push({
      nombre: apt.nombre,
      apellidos: apt.apellidos,
      escuela: apt.escuela,
      carrera: apt.carrera,
      comentarios: apt.comentarios
    })
  }

   // Get Single
   getUser(id: string) {
    this.usuarioRefer = this.db.object('/appointment/' + id);
    return this.usuarioRefer;
  }

  // Get List
  getUsuerList() {
    this.listaUsuarios = this.db.list('/appointment');
    return this.usuarioRefer;
  }

  // Update
  update(id, apt: Appointment) {
    return this.usuarioRefer.update({
      nombre: apt.nombre,
      apellidos: apt.apellidos,
      escuela: apt.escuela,
      carrera: apt.carrera,
      comentarios: apt.comentarios
    })
  }

  // Delete
  delete(id: string) {
    this.usuarioRefer = this.db.object('/appointment/' + id);
    this.usuarioRefer.remove();
  }
}
