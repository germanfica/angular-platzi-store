import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';

import { ContactComponent } from './components/contact/contact.component';
import { FormComponent } from './components/form/form.component';

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
