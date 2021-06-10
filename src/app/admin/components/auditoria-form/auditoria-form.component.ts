import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auditoria-form',
  templateUrl: './auditoria-form.component.html',
  styleUrls: ['./auditoria-form.component.scss']
})
export class AuditoriaFormComponent implements OnInit {

  clientForm = this.fb.group({
    nombre: [null, Validators.required],
    correo: [null, Validators.required],
    telefono: [null, Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(12)])
    ],
    direccion: [null, Validators.required],
    direccion2: null,
    actividad: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  

  hasUnitNumber = false;

  actividades = [
    {name: 'Pesca'},
    {name: 'Ganaderia'},
    {name: 'Actividad'},
    {name: 'Ganancia '},
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }


  ngOnInit() {
  }

}
