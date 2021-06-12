import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auditoria-form',
  templateUrl: './auditoria-form.component.html',
  styleUrls: ['./auditoria-form.component.scss']
})
export class AuditoriaFormComponent implements OnInit {

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
          (<HTMLInputElement>document.getElementById('fechaCreacion')).value,
          (<HTMLInputElement>document.getElementById('idAuditor')).value,
          (<HTMLInputElement>document.getElementById('codigoCuenta')).value,
        ]
      }
    })
    if (clientValues) {
      Swal.fire(JSON.stringify(clientValues))
      let fechaCreacion = clientValues[0];
      let idAuditor = clientValues[1];
      let codigoCuenta = clientValues[2];
      if( fechaCreacion == ""|| idAuditor == "" || codigoCuenta == ""){
        Swal.fire(`No pueden haber elementos vacios`);
      }
      else{
        console.log(clientValues);
        this.dataService.add_Auditoria(
          fechaCreacion,
          idAuditor,
          parseInt(codigoCuenta))
          .subscribe(auditoria => {
            console.log(auditoria)
          })
      }
    }
  }

}
