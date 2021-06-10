import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Abono } from 'src/app/core/models/abono.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-abono-mostrar',
  templateUrl: './abono-mostrar.component.html',
  styleUrls: ['./abono-mostrar.component.scss']
})
export class AbonoMostrarComponent implements OnInit {

  constructor(private dataService:DataService) { }

  abono: Abono[] = [];

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Abono()
    .subscribe(abonos => {
      this.abono = abonos;
    })
  }

}
