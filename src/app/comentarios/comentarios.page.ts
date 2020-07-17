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

  formusUarios: FormGroup;

  constructor(
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formusUarios = this.fb.group({
      nombre: [''],
      apellidos: [''],
      escuela: [''],
      carrera: [''],
      comentarios: ['']
    })
  }
  formSubmit() {
    if (!this.formusUarios.valid) {
      return false;
    } else {
      this.aptService.create(this.formusUarios.value).then(res => {
        console.log(res)
        this.formusUarios.reset();
        this.router.navigate(['/comentarios']);
      })
        .catch(error => console.log(error));
    }
  }
}
