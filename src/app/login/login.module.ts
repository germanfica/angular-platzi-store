import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
