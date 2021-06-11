import { Component, OnInit } from '@angular/core';
import { Telefono } from 'src/app/core/models/telefono.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-telefono-mostrar',
  templateUrl: './telefono-mostrar.component.html',
  styleUrls: ['./telefono-mostrar.component.scss']
})
export class TelefonoMostrarComponent implements OnInit {

  telefono: Telefono[] = [];


  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Telefono()
    .subscribe(telefonos => {
      this.telefono = telefonos;
    })
  }

}
