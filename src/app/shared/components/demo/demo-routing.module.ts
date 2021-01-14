import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent
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
export class DemoRoutingModule { }
