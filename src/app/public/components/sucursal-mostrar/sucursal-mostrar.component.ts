import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/core/models/sucursal.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sucursal-mostrar',
  templateUrl: './sucursal-mostrar.component.html',
  styleUrls: ['./sucursal-mostrar.component.scss']
})
export class SucursalMostrarComponent implements OnInit {

  sucursal: Sucursal[] = [];
 
  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Sucursal()
    .subscribe(sucursales => {
      this.sucursal = sucursales;
    })
  }
 
}
