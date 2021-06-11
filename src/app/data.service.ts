import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sucursal } from './core/models/sucursal.model';
import { Factura } from './core/models/factura.model';
import { Cliente } from './core/models/product.model';
import { Actividad } from './core/models/actividad.model';
import { Auditor } from './core/models/auditor.model';
import { Auditoria } from './core/models/auditoria.model';
import { environment } from 'src/environments/environment';
import { Abono } from './core/models/abono.model';
import { DireccionCliente } from './core/models/direccionCliente.model';
import { Telefono } from './core/models/telefono.model';
import { NotasCredito } from './core/models/notasCredito.model';
import { NotasDebito } from './core/models/notasDebito.model';
import { Canton } from './core/models/canton.model';
import { Provincia } from './core/models/provincia.model';
import { Moneda } from './core/models/moneda.model';
import { CuentaXCobrar } from './core/models/cuentaxCobrar.model';
import { Distrito } from './core/models/distrito.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**
 * @method get all sucursal
 */
   get_Sucursal(){
  return this.response.get<Sucursal[]>(environment.url_api + '/sucursal');
  }

  get_Factura(){
    return this.response.get<Factura[]>(environment.url_api + '/factura/');
    }

  get_Cliente(){
      return this.response.get<Cliente[]>(environment.url_api + '/cliente/');
  }

  get_Actividad(){
    return this.response.get<Actividad[]>(environment.url_api + '/actividad/');
}

  get_Auditor(){
    return this.response.get<Auditor[]>(environment.url_api + '/auditor/');
  }

  get_Auditoria(){
    return this.response.get<Auditoria[]>(environment.url_api + '/auditoria/');
  }

  get_Abono(){
    return this.response.get<Abono[]>(environment.url_api + '/abono/');
  }

  get_Direccion_Cliente(){
    return this.response.get<DireccionCliente[]>(environment.url_api + '/direccion_cliente/');
  }

  get_Telefono(){
    return this.response.get<Telefono[]>(environment.url_api + '/telefono/');
  }

  get_Notas_Credito(){
    return this.response.get<NotasCredito[]>(environment.url_api + '/notas_credito/');
  }

  get_Notas_Debito(){
    return this.response.get<NotasDebito[]>(environment.url_api + '/notas_debito/');
  }

  get_Cantones(){
    return this.response.get<Canton[]>(environment.url_api + '/cantones/');
  }

  get_Provincias(){
    return this.response.get<Provincia[]>(environment.url_api + '/provincias/');
  }

  get_Moneda(){
    return this.response.get<Moneda[]>(environment.url_api + '/monedas/');
  }

  get_CuentasxCobrar(){
    return this.response.get<CuentaXCobrar[]>(environment.url_api + '/cuentasxcobrar/');
  }

  get_Distrito(){
    return this.response.get<Distrito[]>(environment.url_api + '/distritos/');
  }


  //POST

  agregarCliente(cliente:Cliente){
    return this.response.post<Cliente[]>(environment.url_api + '/cliente/', cliente);
  }

  add_Client(cedula:string,nombre:string,email:string,codigoActividad:number,telefono:string,codDistrito:number,detalledir:string){
    let data = {cedula, nombre, email, codigoActividad, telefono, codDistrito, detalledir};
    return this.response.post(environment.url_api + '/cliente/',data);
  }

  
  constructor(private response: HttpClient) {}

  ngOnInit() {}


}
