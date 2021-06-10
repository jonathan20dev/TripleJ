import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/core/models/factura.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-factura-mostrar',
  templateUrl: './factura-mostrar.component.html',
  styleUrls: ['./factura-mostrar.component.scss']
})
export class FacturaMostrarComponent implements OnInit {

  constructor(private dataService: DataService) { }

  factura: Factura[] = [];

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Factura()
    .subscribe(arrFacturas => {
      this.factura = arrFacturas;
    })
  }

  clickProduct(id: number) {
    console.log('Factura');
    console.log(id);
  }

}
