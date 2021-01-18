import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
