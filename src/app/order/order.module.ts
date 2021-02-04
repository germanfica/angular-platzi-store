import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { MaterialModule } from '@app/material/material.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
