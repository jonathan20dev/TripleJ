import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { SucuralFormComponent } from './components/sucural-form/sucural-form.component';
import { FacturaFormComponent } from './components/factura-form/factura-form.component';
import { AuditorFormComponent } from './components/auditor-form/auditor-form.component';
import { ActividadFormComponent } from './components/actividad-form/actividad-form.component';
import { AuditoriaFormComponent } from './components/auditoria-form/auditoria-form.component';
import { AbonosFormComponent } from './components/abonos-form/abonos-form.component';
import { ClientesFormComponent } from './components/clientes-form/clientes-form.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'cliente',
        component: ClientesFormComponent
      },
      {
        path: 'sucursal',
        component: SucuralFormComponent
      },
      {
        path: 'auditor',
        component: AuditorFormComponent
      },
      {
        path: 'actividad',
        component: ActividadFormComponent
      },
      {
        path: 'factura',
        component: FacturaFormComponent
      },
      {
        path: 'auditoria',
        component: AuditoriaFormComponent
      },
      {
        path: 'abonos',
        component: AbonosFormComponent
      },
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
