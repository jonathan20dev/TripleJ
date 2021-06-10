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

  //POST

  add_Client(cedula:string,nombre:string,email:string,actividad:number,telefono:string,codDistrito:number,detalledir:string){
    let data = {
      cedula,
      nombre,
      email,
      actividad,
      telefono,
      codDistrito,
      detalledir 
    };
    return this.response.post(environment.url_api+`/cliente/`,data);
  }

  
  constructor(private response: HttpClient) {}

  ngOnInit() {}


}
