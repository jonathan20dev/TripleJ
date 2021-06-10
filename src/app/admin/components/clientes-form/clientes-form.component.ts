import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/core/models/product.model';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  


  hasUnitNumber = false;

  actividades = ["Pesca Artificial.", "Ganaderia Cuantica"];

  constructor(private fb: FormBuilder, private dataService:DataService ) {}

  onSubmit() {
    
  }

  ngOnInit() {
  }

  async validacionBotton(){
    const { value: clientValues } = await Swal.fire({
      focusConfirm: false,
      confirmButtonText:'Create',
      preConfirm: () => {
        return [
          (<HTMLInputElement>document.getElementById('nombre')).value,
          (<HTMLInputElement>document.getElementById('correo')).value,
          (<HTMLInputElement>document.getElementById('telefono')).value,
          (<HTMLInputElement>document.getElementById('direccion')).value,
          (<HTMLInputElement>document.getElementById('codDistrito')).value,
          (<HTMLInputElement>document.getElementById('cedula')).value,
          (<HTMLInputElement>document.getElementById('actividad')).value
        ]
      }
    })
    if (clientValues) {
      Swal.fire(JSON.stringify(clientValues))
      let nombre = clientValues[0];
      let correo = clientValues[1];
      let telefono = clientValues[2];
      let direccion = clientValues[3];
      let codDistrito = clientValues[4];
      let cedula = clientValues[5];
      let actividad = clientValues[6];
      if(nombre == "" || correo == "" || telefono == "" || direccion == "" || codDistrito == ""|| cedula == "" || actividad == ""){
        Swal.fire(`There are empty inputs`);
      }
      else{
        this.add_Client(
          cedula,
          nombre,
          correo,
          parseInt(actividad),
          telefono,
          parseInt(codDistrito),
          direccion);
      }
    }
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