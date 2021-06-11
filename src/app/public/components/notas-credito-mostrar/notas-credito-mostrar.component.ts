import { Component, OnInit } from '@angular/core';
import { NotasCredito } from 'src/app/core/models/notasCredito.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-notas-credito-mostrar',
  templateUrl: './notas-credito-mostrar.component.html',
  styleUrls: ['./notas-credito-mostrar.component.scss']
})
export class NotasCreditoMostrarComponent implements OnInit {

  constructor(private dataService:DataService) { }

  notaCredito: NotasCredito[] = [];

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Notas_Credito()
    .subscribe(notasCredito => {
      this.notaCredito = notasCredito;
    })
  }

}
