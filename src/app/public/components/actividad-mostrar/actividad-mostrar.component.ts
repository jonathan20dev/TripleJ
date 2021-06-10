import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/core/models/actividad.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-actividad-mostrar',
  templateUrl: './actividad-mostrar.component.html',
  styleUrls: ['./actividad-mostrar.component.scss']
})
export class ActividadMostrarComponent implements OnInit {


  actividad: Actividad[] = []

  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Actividad()
    .subscribe(Actividades => {
      this.actividad = Actividades;
    })
  }

}
