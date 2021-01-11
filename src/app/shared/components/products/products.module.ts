import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './../../../shared/components/products/products-routing.module';
import { SharedModule } from './../../shared.module';
import { CoreModule } from './../../../core/core.module';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
