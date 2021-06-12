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
import { TelefonoMostrarComponent } from './components/telefono-mostrar/telefono-mostrar.component';
import { DireccionClienteMostrarComponent } from './components/direccion-cliente-mostrar/direccion-cliente-mostrar.component';
import { NotasDebitoMostrarComponent } from './components/notas-debito-mostrar/notas-debito-mostrar.component';
import { NotasCreditoMostrarComponent } from './components/notas-credito-mostrar/notas-credito-mostrar.component';
import { CuentaPorCobrarMostrarComponent } from './components/cuenta-por-cobrar-mostrar/cuenta-por-cobrar-mostrar.component';
import { MonedaMostrarComponent } from './components/moneda-mostrar/moneda-mostrar.component';
import { ProvinciaMostrarComponent } from './components/provincia-mostrar/provincia-mostrar.component';
import { CantonMostrarComponent } from './components/canton-mostrar/canton-mostrar.component';
import { DistritoMostrarComponent } from './components/distrito-mostrar/distrito-mostrar.component';
import { VerModAuditoriasMostrarComponent } from './components/ver-mod-auditorias-mostrar/ver-mod-auditorias-mostrar.component'; 

@NgModule({
  declarations: [NavComponent, DashboardComponent,
     SucursalMostrarComponent, AuditorMostrarComponent, ActividadMostrarComponent,
      FacturaMostrarComponent, AuditoriaMostrarComponent, ClienteMostrarComponent,
       AbonoMostrarComponent, TelefonoMostrarComponent, DireccionClienteMostrarComponent,
        NotasDebitoMostrarComponent, NotasCreditoMostrarComponent, CuentaPorCobrarMostrarComponent,
         MonedaMostrarComponent, ProvinciaMostrarComponent, CantonMostrarComponent, DistritoMostrarComponent,
          VerModAuditoriasMostrarComponent],
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
