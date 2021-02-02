import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { OldProductFormComponent } from './components/old-product-form/old-product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';

@NgModule({
  declarations: [
    OldProductFormComponent,
    NavComponent,
    DashboardComponent,
    AdminTableComponent,
    ProductListComponent,
    CreateProductFormComponent,
    EditProductFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    LayoutModule
  ]
})
export class AdminModule { }
