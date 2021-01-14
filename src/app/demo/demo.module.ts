import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DemoComponent } from './demo.component';
import { MaterialModule } from '@app/material/material.module';



@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,
    DemoRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class DemoModule { }
