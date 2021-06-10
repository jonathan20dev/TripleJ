import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  clientForm = this.fb.group({
    cedula: ["", Validators.required],  
    nombre: ["", Validators.required],
    correo: ["", Validators.required],
    actividad: ["", Validators.required],
    telefono: ["", Validators.required],
    codDistrito: ["", Validators.required],
    direccion: ["", Validators.required],
  });


  hasUnitNumber = false;

  actividades = ["Pesca Artificial.", "Ganaderia Cuantica"];

  constructor(private fb: FormBuilder, private dataService:DataService ) {}

  onSubmit() {
    
  }

  ngOnInit() {
  }

  validacionBotton(){
    console.log("1:"+this.clientForm);
      
    }


  add_Client(cedula:string,nombre:string,email:string,actividad:number,telefono:string,codDistrito:number,detalledir:string){
    this.dataService.add_Client(cedula,
      nombre,
      email,
      actividad,
      telefono,
      codDistrito,
      detalledir).toPromise().then((res:any)=>{
      if(res[0].code == 201){
        Swal.fire(`Created successfully`);
      }
    }, (error)=>{
      alert(error.message);
    });
  }
}