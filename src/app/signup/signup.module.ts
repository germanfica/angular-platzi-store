import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './components/signup.component';
import { MaterialModule } from '@app/material/material.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
