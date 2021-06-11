import { Component, OnInit } from '@angular/core';
import { CuentaXCobrar } from 'src/app/core/models/cuentaxCobrar.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cuenta-por-cobrar-mostrar',
  templateUrl: './cuenta-por-cobrar-mostrar.component.html',
  styleUrls: ['./cuenta-por-cobrar-mostrar.component.scss']
})
export class CuentaPorCobrarMostrarComponent implements OnInit {

  constructor(private dataService:DataService) { }

  cuentaXcobrar: CuentaXCobrar[] = [];

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_CuentasxCobrar()
    .subscribe(cuentasxc => {
      this.cuentaXcobrar = cuentasxc;
    })
  }

}
