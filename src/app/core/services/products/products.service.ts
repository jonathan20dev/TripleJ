import { Injectable } from '@angular/core';

import { Cliente } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  client: Cliente[] = [
    {
      id: '1',
      cedula: '2-5432-4321',
      nombre: 'José Martin',
      email: 'jota@gmail.com',
      actividad: 'Ganadaria'
    },
    {
      id: '2',
      cedula: '3-4432-6331',
      nombre: 'Carlos Arrieta',
      email: 'carlitoszz@gmail.com',
      actividad: 'Ganadaria'
    },
    {
      id: '3',
      cedula: '4-3132-7341',
      nombre: 'Ramón Peralta',
      email: 'romoycarla@gmail.com',
      actividad: 'Ganadaria'
    },
    {
      id:'4',
      cedula: '5-2232-3351',
      nombre: 'Juan Perez',
      email: 'doppyes@gmail.com',
      actividad: 'Ganadaria'
    },
    {
      id:'5',
      cedula: '6-1332-1311',
      nombre: 'Priscila Fonseca',
      email: 'cooperativarivas@gmail.com',
      actividad: 'Ganadaria'
    },
  ];

  constructor() { }

  getAllProducts() {
    return this.client;
  }

  getProduct(id: string) {
    return this.client.find(item => id === item.id);
  }
}