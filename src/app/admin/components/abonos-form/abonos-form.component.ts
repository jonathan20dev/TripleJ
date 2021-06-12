import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-abonos-form',
  templateUrl: './abonos-form.component.html',
  styleUrls: ['./abonos-form.component.scss']
})
export class AbonosFormComponent implements OnInit {

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
          (<HTMLInputElement>document.getElementById('factura')).value,
          (<HTMLInputElement>document.getElementById('monto')).value,
          (<HTMLInputElement>document.getElementById('formaPago')).value,
          (<HTMLInputElement>document.getElementById('docReferencia')).value
        ]
      }
    })
    if (clientValues) {
      Swal.fire(JSON.stringify(clientValues))

      let factura = clientValues[0];
      let monto = clientValues[1];
      let formaPago = clientValues[2];
      let docReferencia = clientValues[3];


      if( factura == ""|| monto == "" || formaPago == ""  || docReferencia == "" ){
        Swal.fire(`No pueden haber elementos vacios`);
      }
      else{
        console.log(clientValues);
        this.dataService.add_Abono(
          parseInt(factura),
          parseInt(monto),
          formaPago,
          docReferencia
          )
          .subscribe(abono => {
            console.log(abono)
          })
      }
    }
  }

}
