import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';

import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
  ],
  imports: [
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
