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
import { TelefonoMostrarComponent } from './components/telefono-mostrar/telefono-mostrar.component';
import { DireccionClienteMostrarComponent } from './components/direccion-cliente-mostrar/direccion-cliente-mostrar.component';
import { NotasCreditoMostrarComponent } from './components/notas-credito-mostrar/notas-credito-mostrar.component';
import { NotasDebitoMostrarComponent } from './components/notas-debito-mostrar/notas-debito-mostrar.component';
import { CuentaPorCobrarMostrarComponent } from './components/cuenta-por-cobrar-mostrar/cuenta-por-cobrar-mostrar.component';
import { MonedaMostrarComponent } from './components/moneda-mostrar/moneda-mostrar.component';
import { ProvinciaMostrarComponent } from './components/provincia-mostrar/provincia-mostrar.component';
import { CantonMostrarComponent } from './components/canton-mostrar/canton-mostrar.component';
import { DistritoMostrarComponent } from './components/distrito-mostrar/distrito-mostrar.component';
import { VerModAuditoriasMostrarComponent } from './components/ver-mod-auditorias-mostrar/ver-mod-auditorias-mostrar.component';

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
        path: 'telefono',
        component: TelefonoMostrarComponent
      },
      {
        path: 'direccion_cliente',
        component: DireccionClienteMostrarComponent
      },
      {
        path: 'notas_credito',
        component: NotasCreditoMostrarComponent
      },
      {
        path: 'notas_debito',
        component: NotasDebitoMostrarComponent
      },
      {
        path: 'cuenta_x_cobrar',
        component: CuentaPorCobrarMostrarComponent
      },
      {
        path: 'moneda',
        component: MonedaMostrarComponent
      },
      {
        path: 'provincia',
        component: ProvinciaMostrarComponent
      },
      {
        path: 'canton',
        component: CantonMostrarComponent
      },
      {
        path: 'distrito',
        component: DistritoMostrarComponent
      },
      {
        path: 'ver_modificaciones',
        component: VerModAuditoriasMostrarComponent
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
