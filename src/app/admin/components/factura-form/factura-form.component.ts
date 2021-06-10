import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.scss']
})
export class FacturaFormComponent implements OnInit {

  facturaForm = this.fb.group({
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

  Tipos = [
    {name: 'Contado'},
    {name: 'Credito'}
  ];

  Monedas = [
    {name: 'Colones'},
    {name: 'Dollar'},
    {name: 'Euro'},
  ];

  Sucursal = [
    {name: 'BP Total Heredia'},
    {name: 'BP Total Cartago'},
    {name: 'BP Total San Pedro'},
  ];

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
