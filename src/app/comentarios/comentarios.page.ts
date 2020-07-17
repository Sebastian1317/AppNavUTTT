import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  formUsuarios: FormGroup;

  constructor(
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formUsuarios = this.fb.group({
      nombre: [''],
      apellidos: [''],
      escuela: [''],
      carrera: [''],
      comentarios: ['']
    })
  }
  formSubmit() {
    if (!this.formUsuarios.valid) {
      return false;
    } else {
      this.aptService.createUsuario(this.formUsuarios.value).then(res => {
        console.log(res)
        this.formUsuarios.reset();
        this.router.navigate(['/comentarios']);
      })
        .catch(error => console.log(error));
    }
  }
}
