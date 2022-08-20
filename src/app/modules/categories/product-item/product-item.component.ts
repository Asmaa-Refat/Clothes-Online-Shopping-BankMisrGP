import { Product } from 'src/app/shared/utilities/product';
import { ViewItemService } from './../../../shared/services/viewOneItem/view-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  constructor(private _viewItem: ViewItemService) {}

  changeColor(): string {
    return (
      'border-color:' +
      this.item.colors[0] +
      ';' +
      'margin: 5px; border-width: 10px; width:0px; height:0px; border-radius: 50%;'
    );
  }

  changeColor2(): string {
    return (
      'border-color:' +
      this.item.colors[1] +
      ';' +
      ' margin: 5px;border-width: 10px; width:0px; height:0px; border-radius: 50%;'
    );
  }

  changeColor3(): string {
    return (
      'border-color:' +
      this.item.colors[2] +
      ';' +
      ' margin: 5px; border-width: 10px; width:0px; height:0px; border-radius: 50%;'
    );
  }

  item: Product = {
    id: 0,
    name: '',
    description: '',
    sizes: [],
    colors: [],
    price: 0,
    imageUrl: '',
  };

  ngOnInit(): void {
    this.item = this._viewItem.item;
  }
}
