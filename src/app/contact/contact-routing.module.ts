import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';

import { AdminGuard } from '@app/admin/admin.guard'

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    component: ContactComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }