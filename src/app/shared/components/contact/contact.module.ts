import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';

import { ContactComponent } from './components/contact/contact.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    ContactComponent,
    FormComponent,
  ],
  imports: [
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
