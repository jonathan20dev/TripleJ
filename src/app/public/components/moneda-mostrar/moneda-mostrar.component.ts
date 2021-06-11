import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/core/models/moneda.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-moneda-mostrar',
  templateUrl: './moneda-mostrar.component.html',
  styleUrls: ['./moneda-mostrar.component.scss']
})
export class MonedaMostrarComponent implements OnInit {

  moneda: Moneda[] = [];


  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Moneda()
    .subscribe(monedas => {
      this.moneda = monedas;
    })
  }

}
