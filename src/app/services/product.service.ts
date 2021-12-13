import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor() { }

  public getAllProducts(): string[] {
      const productList = [];
      // make api call to get product list
      const productListFromBackend = ['pickles', 'donuts'];
      productListFromBackend.forEach(element => {
          productList.push(element);
      });
  }

}