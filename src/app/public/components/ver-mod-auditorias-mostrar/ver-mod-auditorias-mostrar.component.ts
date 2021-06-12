import { Component, OnInit } from '@angular/core';
import { VerModAuditoria } from 'src/app/core/models/verModsAuditoria.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ver-mod-auditorias-mostrar',
  templateUrl: './ver-mod-auditorias-mostrar.component.html',
  styleUrls: ['./ver-mod-auditorias-mostrar.component.scss']
})
export class VerModAuditoriasMostrarComponent implements OnInit {

  constructor(private dataService:DataService) { }

  modAuditoria: VerModAuditoria[] = [];

  ngOnInit() {
    this.fetchElementos();
  }


  fetchElementos(){
    this.dataService.get_ModsAuditorias(1)
    .subscribe(vermodAUDI => {
      this.modAuditoria = vermodAUDI;
    })
  }

}
