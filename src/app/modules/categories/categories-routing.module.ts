import { ProductItemComponent } from './product-item/product-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'product/:id', component: ProductsComponent }, //categories/products/id
  {path: 'productItem', component: ProductItemComponent},  //categories/productItem
  {path: 'showCart', component: CartComponent}  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
