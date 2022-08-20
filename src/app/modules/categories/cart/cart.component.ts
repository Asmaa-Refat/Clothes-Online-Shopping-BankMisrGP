import { Router } from '@angular/router';
import { AddToCartService } from './../../../shared/services/addToCart/add-to-cart.service';
import { Product } from 'src/app/shared/utilities/product';
import { Component, OnInit } from '@angular/core';
import { ViewItemService } from 'src/app/shared/services/viewOneItem/view-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private _addService: AddToCartService,
    private _router: Router,
    private _viewItem: ViewItemService
  ) {}

  addedProducts: Product[] = [];

  ngOnInit(): void {
    this.addedProducts = this._addService.addedProducts;
  }

  delete(id: number) {
    console.log(id);
    this.addedProducts = this.addedProducts.filter((item) => item.id != id);

    this._addService.addedProducts = this.addedProducts;
  }

  view(product: Product) {
    this._router.navigate(['/categories/productItem']);
    this._viewItem.item = product;
  }
}
