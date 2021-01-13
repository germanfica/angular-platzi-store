import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LayoutComponent } from './shared/components/layout/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // LA CLAVEE!!!
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path:'home',
        loadChildren: () => import('./shared/components/home/home.module').then(m => m.HomeModule)
      },
      // No me convence esta ruta para hacer SEO Optimization
      {
        path: 'products',
        loadChildren: () => import('./shared/components/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./shared/components/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'css-grid-layout',
        loadChildren: () => import('./shared/components/css-grid-layout/css-grid-layout.module').then(m => m.CssGridLayoutModule)
      },
    ]
  },
  {
    path: 'demo',
    loadChildren: () => import('./shared/components/demo/demo.module').then(m => m.DemoModule)
  },
  // {
  //   path: 'demo',
  //   component: DemoComponent
  // },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Optimiza el tiempo de carga inicial de los sitios webs
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
