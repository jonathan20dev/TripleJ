import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/core/models/product.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cliente-mostrar',
  templateUrl: './cliente-mostrar.component.html',
  styleUrls: ['./cliente-mostrar.component.scss']
})
export class ClienteMostrarComponent implements OnInit {


  client: Cliente[] = [];


  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Cliente()
    .subscribe(clientes => {
      this.client = clientes;
    })
  }

}
