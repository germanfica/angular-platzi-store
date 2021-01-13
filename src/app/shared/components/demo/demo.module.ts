import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';

import { SharedModule } from '../../shared.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    DemoComponent,
    // ExponentialPipe,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    DemoRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class DemoModule { }
