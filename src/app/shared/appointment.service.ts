import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private listaUsuarios: AngularFirestoreCollection<Appointment>;
  private usuarios: Observable<Appointment[]>;
  constructor(db: AngularFirestore) { 
    this.listaUsuarios = db.collection<Appointment>('Usuarios');
    this.usuarios = this.listaUsuarios.snapshotChanges().pipe(map(
      actions => {
        return actions.map( a=> {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }

  createUsuario(apt: Appointment) {
    return this.listaUsuarios.add(apt);
  }
}
