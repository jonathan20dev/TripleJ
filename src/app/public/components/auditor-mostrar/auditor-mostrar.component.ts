import { Component, OnInit } from '@angular/core';
import { Auditor } from 'src/app/core/models/auditor.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-auditor-mostrar',
  templateUrl: './auditor-mostrar.component.html',
  styleUrls: ['./auditor-mostrar.component.scss']
})
export class AuditorMostrarComponent implements OnInit {

  constructor(private dataService: DataService) { }

  auditor: Auditor[] = []

  clickProduct(cedula: number) {
    console.log('Auditor');
    console.log(cedula);
  }

  fetchElementos(){
    this.dataService.get_Auditor()
    .subscribe(auditores => {
      this.auditor = auditores;
    })
  }

  ngOnInit() {
    this.fetchElementos();
  }

}
