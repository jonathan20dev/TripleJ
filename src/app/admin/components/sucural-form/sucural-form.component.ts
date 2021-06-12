import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucural-form',
  templateUrl: './sucural-form.component.html',
  styleUrls: ['./sucural-form.component.scss']
})
export class SucuralFormComponent implements OnInit {



  constructor(private dataService:DataService ) {}

  onSubmit() {
    alert('Thanks!');
  }


  ngOnInit() {
  }

  add_Sucursal(nombre:string){
    this.dataService.add_Sucursal(
      nombre).toPromise().then((res:any)=>{
      if(res[0].code == 201){
        Swal.fire(`Created successfully`);
      }
    }, (error)=>{
      alert(error.message);
    });
  }

  async validacionBotton(){
    const { value: sucursalValues } = await Swal.fire({
      focusConfirm: false,
      confirmButtonText:'Create',
      preConfirm: () => {
        return [
          (<HTMLInputElement>document.getElementById('nombre')).value,
          
        ]
      }
    })
    if (sucursalValues) {
      Swal.fire(JSON.stringify(sucursalValues))
      let nombre = sucursalValues[0];
      
      if(nombre == ""){
        Swal.fire(`No pueden haber elementos vacios`);
      }
      else{
        this.dataService.add_Sucursal(
          nombre)
          .subscribe(sucursal => {
          })
      }
    }
  }

}
