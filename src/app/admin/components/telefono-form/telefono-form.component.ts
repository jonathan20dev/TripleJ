import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-telefono-form',
  templateUrl: './telefono-form.component.html',
  styleUrls: ['./telefono-form.component.scss']
})
export class TelefonoFormComponent implements OnInit {


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
          (<HTMLInputElement>document.getElementById('telefono')).value,
          (<HTMLInputElement>document.getElementById('cedula')).value,
        ]
      }
    })
    if (clientValues) {
      Swal.fire(JSON.stringify(clientValues))
      let telefono = clientValues[1];
      let cedula = clientValues[0];
      if( telefono == ""|| cedula == ""){
        Swal.fire(`No pueden haber elementos vacios`);
      }
      else{
        console.log(clientValues);
        this.dataService.add_Telefono(
          clientValues[0],
          clientValues[1])
          .subscribe(telefono => {
            console.log(telefono)
          })
      }
    }
  }

  

}
