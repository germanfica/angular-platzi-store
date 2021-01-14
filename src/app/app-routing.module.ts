import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

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
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      // No me convence esta ruta para hacer SEO Optimization
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./shared/components/demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'css-grid-layout',
        loadChildren: () => import('./shared/components/css-grid-layout/css-grid-layout.module').then(m => m.CssGridLayoutModule)
      },
    ]
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
