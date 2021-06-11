import { Component, OnInit } from '@angular/core';
import { Canton } from 'src/app/core/models/canton.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-canton-mostrar',
  templateUrl: './canton-mostrar.component.html',
  styleUrls: ['./canton-mostrar.component.scss']
})
export class CantonMostrarComponent implements OnInit {

  cantones: Canton[] = [];


  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Cantones()
    .subscribe(canto => {
      this.cantones = canto;
    })
  }

}
