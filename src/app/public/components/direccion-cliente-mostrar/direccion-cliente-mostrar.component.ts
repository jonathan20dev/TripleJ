import { Component, OnInit } from '@angular/core';
import { DireccionCliente } from 'src/app/core/models/direccionCliente.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-direccion-cliente-mostrar',
  templateUrl: './direccion-cliente-mostrar.component.html',
  styleUrls: ['./direccion-cliente-mostrar.component.scss']
})
export class DireccionClienteMostrarComponent implements OnInit {

  constructor(private dataService:DataService) { }

  direccionCliente: DireccionCliente[] = [];

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Direccion_Cliente()
    .subscribe(direcciones => {
      this.direccionCliente = direcciones;
    })
  }

}
