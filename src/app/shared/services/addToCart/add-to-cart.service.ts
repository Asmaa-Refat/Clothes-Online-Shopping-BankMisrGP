import { Product } from 'src/app/shared/utilities/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  constructor() {}

  addedProducts: Product[] = [];

  add(product: Product) {
    this.addedProducts.push(product);
  }
}
