import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/core/models/provincia.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-provincia-mostrar',
  templateUrl: './provincia-mostrar.component.html',
  styleUrls: ['./provincia-mostrar.component.scss']
})
export class ProvinciaMostrarComponent implements OnInit {

  provincias: Provincia[] = [];


  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Provincias()
    .subscribe(provinci => {
      this.provincias = provinci;
    })
  }

}
