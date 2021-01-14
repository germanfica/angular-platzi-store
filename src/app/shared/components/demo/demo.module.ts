import { NgModule } from '@angular/core';
import { DemoRoutingModule } from './demo-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';

import { SharedModule } from '../../shared.module';

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
