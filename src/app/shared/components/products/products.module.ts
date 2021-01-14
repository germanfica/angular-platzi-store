import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './../../../shared/components/products/products-routing.module';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
