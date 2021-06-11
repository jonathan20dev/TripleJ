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
import { TelefonoFormComponent } from './components/telefono-form/telefono-form.component';
import { NotasFormComponent } from './components/notas-form/notas-form.component';
import { CuentaPorCobrarFormComponent } from './components/cuenta-por-cobrar-form/cuenta-por-cobrar-form.component';
import { MonedaFormComponent } from './components/moneda-form/moneda-form.component';
import { ProvinciaFormComponent } from './components/provincia-form/provincia-form.component';
import { CantonFormComponent } from './components/canton-form/canton-form.component';
import { DistritoFormComponent } from './components/distrito-form/distrito-form.component';


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
        path: 'telefono',
        component: TelefonoFormComponent
      },
      {
        path: 'notas',
        component: NotasFormComponent
      },
      {
        path: 'cuenta_x_cobrar',
        component: CuentaPorCobrarFormComponent
      },
      {
        path: 'moneda',
        component: MonedaFormComponent
      },
      {
        path: 'provincia',
        component: ProvinciaFormComponent
      },
      {
        path: 'canton',
        component: CantonFormComponent
      },
      {
        path: 'distrito',
        component: DistritoFormComponent
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
