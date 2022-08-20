import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ProductsRoutingModule } from './categories-routing.module';
import { FormsModule } from '@angular/forms';

import { ProductItemComponent } from './product-item/product-item.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { CarouselModule } from 'primeng/carousel';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    ProductsComponent,
    ProductItemComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CarouselModule,
    DataViewModule,
    RatingModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
  ],
})
export class ProductsModule {}
