import { ViewItemService } from './../../../shared/services/viewOneItem/view-item.service';
import { AddToCartService } from '../../../shared/services/addToCart/add-to-cart.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/shared/utilities/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categoryId: any; // exsists in the url parameters

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _addtocart: AddToCartService,
    private _viewItem: ViewItemService
  ) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id'); //getting the category id from the URL
    let url = `${environment.baseURL}product/${this.categoryId}`;
    let options = {
      headers: {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    this.http.get<Product[]>(url, options).subscribe(
      (response: Product[]) => {
        console.log(response), (this.products = response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  add(product: Product) {
    this._addtocart.add(product);
    alert('added successsfuly!');
  }

  view(product: Product) {
    this.router.navigate(['/categories/productItem']);
    this._viewItem.item = product;
  }
}
