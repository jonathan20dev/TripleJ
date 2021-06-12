import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.component.html',
  styleUrls: ['./actividad-form.component.scss']
})
export class ActividadFormComponent implements OnInit {

  constructor(private dataService:DataService ) {}

  onSubmit() {
    alert('Thanks!');
  }


  ngOnInit() {
  }

  add_Actividad(nombre:string){
    this.dataService.add_Actividad(
      nombre).toPromise().then((res:any)=>{
      if(res[0].code == 201){
        Swal.fire(`Created successfully`);
      }
    }, (error)=>{
      alert(error.message);
    });
  }

  async validacionBotton(){
    const { value: actividadValues } = await Swal.fire({
      focusConfirm: false,
      confirmButtonText:'Create',
      preConfirm: () => {
        return [
          (<HTMLInputElement>document.getElementById('nombre')).value,
          
        ]
      }
    })
    if (actividadValues) {
      Swal.fire(JSON.stringify(actividadValues))
      let nombre = actividadValues[0];
      
      if(nombre == ""){
        Swal.fire(`No pueden haber elementos vacios`);
      }
      else{
        this.dataService.add_Actividad(
          nombre)
          .subscribe(actividad => {
          })
      }
    }
  }

}
