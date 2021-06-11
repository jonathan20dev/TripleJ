import { Component, OnInit } from '@angular/core';
import { Distrito } from 'src/app/core/models/distrito.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-distrito-mostrar',
  templateUrl: './distrito-mostrar.component.html',
  styleUrls: ['./distrito-mostrar.component.scss']
})
export class DistritoMostrarComponent implements OnInit {

  distritos: Distrito[] = [];


  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Distrito()
    .subscribe(distri => {
      this.distritos = distri;
    })
  }

}
