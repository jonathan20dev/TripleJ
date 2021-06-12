import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auditor-form',
  templateUrl: './auditor-form.component.html',
  styleUrls: ['./auditor-form.component.scss']
})
export class AuditorFormComponent implements OnInit {

  
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
          (<HTMLInputElement>document.getElementById('cedula')).value,
        ]
      }
    })
    if (clientValues) {
      Swal.fire(JSON.stringify(clientValues))
      let cedula = clientValues[1];
      let nombre = clientValues[0];
      if( nombre == ""|| cedula == ""){
        Swal.fire(`No pueden haber elementos vacios`);
      }
      else{
        console.log(clientValues);
        this.dataService.add_Auditor(
          clientValues[1],
          clientValues[0])
          .subscribe(auditor => {
            console.log(auditor)
          })
      }
    }
  }

}
