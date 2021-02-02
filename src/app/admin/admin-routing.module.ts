import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { OldProductFormComponent } from './components/old-product-form/old-product-form.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'create',
        component: OldProductFormComponent
      },
      {
        path: 'table',
        component: AdminTableComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/create',
        component: CreateProductFormComponent
      },
      {
        path: 'products/edit/:id',
        component: EditProductFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
