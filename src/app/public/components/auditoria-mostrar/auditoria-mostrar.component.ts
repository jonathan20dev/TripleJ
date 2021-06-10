import { Component, OnInit } from '@angular/core';
import { Auditoria } from 'src/app/core/models/auditoria.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-auditoria-mostrar',
  templateUrl: './auditoria-mostrar.component.html',
  styleUrls: ['./auditoria-mostrar.component.scss']
})
export class AuditoriaMostrarComponent implements OnInit {

  constructor(private dataService: DataService ) { }

  auditoria: Auditoria[] = [];

  ngOnInit() {
    this.fetchElementos();
  }

  fetchElementos(){
    this.dataService.get_Auditoria()
    .subscribe(auditorias => {
      this.auditoria = auditorias;
    })
  }

  clickProduct(nombre: string) {
    console.log('nombre Actividad:');
    console.log(nombre);
  }

}
