import { Injectable } from '@angular/core';

import { Cliente } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  client: Cliente[] = [];

  constructor() { }

  getAllProducts() {
    return this.client;
  }

  getProduct(id: string) {
    return this.client.find(item => id === item.cedula);
  }
}