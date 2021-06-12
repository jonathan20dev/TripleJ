import { Component, OnInit } from '@angular/core';
import { Auditoria } from 'src/app/core/models/auditoria.model';
import { VerModAuditoria } from 'src/app/core/models/verModsAuditoria.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-auditoria-mostrar',
  templateUrl: './auditoria-mostrar.component.html',
  styleUrls: ['./auditoria-mostrar.component.scss']
})
export class AuditoriaMostrarComponent implements OnInit {

  constructor(private dataService: DataService ) { }
  
  parametroAux = 1;

  auxiliarUno = true;
  auxiliarDos = false;

  auditoria: Auditoria[] = [];

  ngOnInit() {
    this.fetchElementos();
    this.fetchElementos2();
  }

  fetchElementos(){
    this.dataService.get_Auditoria()
    .subscribe(auditorias => {
      this.auditoria = auditorias;
    })
  }

  onSave(idAuditoria:number){
    this.parametroAux = idAuditoria
    this.auxiliarUno = false;
    this.auxiliarDos = true;
    this.fetchElementos2()
  }

  onSave2(){
    this.auxiliarUno = true;
    this.auxiliarDos = false;
  }

  clickProduct(nombre: string) {
    console.log('nombre Actividad:');
    console.log(nombre);
  }

  modAuditoria: VerModAuditoria[] = [];

  fetchElementos2(){
    this.dataService.get_ModsAuditorias(this.parametroAux)
    .subscribe(vermodAUDI => {
      this.modAuditoria = vermodAUDI;
    })
  }



}
