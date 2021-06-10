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
       ClientesFormComponent],
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
