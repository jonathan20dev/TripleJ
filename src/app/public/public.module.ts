import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module'; 
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
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
import { SucursalMostrarComponent } from './components/sucursal-mostrar/sucursal-mostrar.component';
import { AuditorMostrarComponent } from './components/auditor-mostrar/auditor-mostrar.component';
import { ActividadMostrarComponent } from './components/actividad-mostrar/actividad-mostrar.component';
import { FacturaMostrarComponent } from './components/factura-mostrar/factura-mostrar.component';
import { AuditoriaMostrarComponent } from './components/auditoria-mostrar/auditoria-mostrar.component';
import { ClienteMostrarComponent } from './components/cliente-mostrar/cliente-mostrar.component';
import { HttpClientModule } from '@angular/common/http';
import { AbonoMostrarComponent } from './components/abono-mostrar/abono-mostrar.component'; 

@NgModule({
  declarations: [NavComponent, DashboardComponent,
     SucursalMostrarComponent, AuditorMostrarComponent, ActividadMostrarComponent,
      FacturaMostrarComponent, AuditoriaMostrarComponent, ClienteMostrarComponent, AbonoMostrarComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
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
    MatMenuModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PublicModule { }