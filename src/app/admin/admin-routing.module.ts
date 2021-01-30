import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { OldProductFormComponent } from './components/old-product-form/old-product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
