import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClienteMostrarComponent } from './components/cliente-mostrar/cliente-mostrar.component';
import { SucursalMostrarComponent } from './components/sucursal-mostrar/sucursal-mostrar.component';
import { AuditorMostrarComponent } from './components/auditor-mostrar/auditor-mostrar.component';
import { ActividadMostrarComponent } from './components/actividad-mostrar/actividad-mostrar.component';
import { FacturaMostrarComponent } from './components/factura-mostrar/factura-mostrar.component';
import { AuditoriaMostrarComponent } from './components/auditoria-mostrar/auditoria-mostrar.component';
import { AbonoMostrarComponent } from './components/abono-mostrar/abono-mostrar.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'cliente',
        component: ClienteMostrarComponent
      },
      {
        path: 'auditoria',
        component: AuditoriaMostrarComponent
      },
      {
        path: 'factura',
        component: FacturaMostrarComponent
      },
      {
        path: 'actividad',
        component: ActividadMostrarComponent
      },
      {
        path: 'auditor',
        component: AuditorMostrarComponent
      },
      {
        path: 'sucursal',
        component: SucursalMostrarComponent
      },
      {
        path: 'abono',
        component: AbonoMostrarComponent
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
export class PublicRoutingModule { }
