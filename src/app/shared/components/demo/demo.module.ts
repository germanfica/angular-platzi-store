import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DemoComponent } from './demo.component';



@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    SharedModule,
    DemoRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class DemoModule { }
