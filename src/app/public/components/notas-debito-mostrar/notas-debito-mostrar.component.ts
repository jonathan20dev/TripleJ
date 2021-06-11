import { Component, OnInit } from '@angular/core';
import { NotasDebito } from 'src/app/core/models/notasDebito.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-notas-debito-mostrar',
  templateUrl: './notas-debito-mostrar.component.html',
  styleUrls: ['./notas-debito-mostrar.component.scss']
})
export class NotasDebitoMostrarComponent implements OnInit {

  constructor(private dataService:DataService) { }

  notaDebito: NotasDebito[] = [];

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Notas_Debito()
    .subscribe(notasDebito => {
      this.notaDebito = notasDebito;
    })
  }

}
