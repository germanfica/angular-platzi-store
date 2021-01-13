import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';

import { ContactComponent } from './contact.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    ContactComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
