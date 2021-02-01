import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './components/signin.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
