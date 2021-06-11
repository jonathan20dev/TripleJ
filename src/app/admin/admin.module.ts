import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SucuralFormComponent } from './components/sucural-form/sucural-form.component';
import { AuditorFormComponent } from './components/auditor-form/auditor-form.component';
import { ActividadFormComponent } from './components/actividad-form/actividad-form.component';
import { FacturaFormComponent } from './components/factura-form/factura-form.component';
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


@NgModule({
  declarations: [ 
    NavComponent, 
    DashboardComponent, 
    SucuralFormComponent, 
    AuditorFormComponent, 
    ActividadFormComponent,
     FacturaFormComponent, 
     AuditoriaFormComponent,
      AbonosFormComponent,
       ClientesFormComponent,
       TelefonoFormComponent,
       NotasFormComponent,
       CuentaPorCobrarFormComponent,
       MonedaFormComponent,
       ProvinciaFormComponent,
       CantonFormComponent,
       DistritoFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class AdminModule { }
