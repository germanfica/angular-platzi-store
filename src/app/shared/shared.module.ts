import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Curso de Angular
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Curso css grid
import { CartComponent } from './components/cart/cart.component';
import { CardComponent } from './components/card/card.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { DemoComponent } from './components/demo/demo.component';
import { PinterestComponent } from './components/pinterest/pinterest.component';
import { PlatziComponent } from './components/platzi/platzi.component';
import { StoreComponent } from './components/store/store.component';
import { StoreV2Component } from './components/store-v2/store-v2.component';
import { StoreV12Component } from './components/store-v12/store-v12.component';
import { StoreV13Component } from './components/store-v13/store-v13.component';
import { StoreV14Component } from './components/store-v14/store-v14.component';
import { StoreV15Component } from './components/store-v15/store-v15.component';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';

import { HighlightDirective } from './directives/highlight/highlight.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailComponent,
    ExponentialPipe,
    HighlightDirective,
    PageNotFoundComponent,
    LayoutComponent,
    // Curso css grid
    CartComponent,
    CardComponent,
    InstagramComponent,
    DemoComponent,
    PinterestComponent,
    PlatziComponent,
    StoreComponent,
    StoreV2Component,
    StoreV15Component,
    StoreV14Component,
    StoreV13Component,
    StoreV12Component,
  ],
  // Esto es la clave para poder utilizar los shared components
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailComponent,
    ExponentialPipe,
    HighlightDirective,
    PageNotFoundComponent,
    LayoutComponent,
    // Curso css grid
    CartComponent,
    CardComponent,
    InstagramComponent,
    DemoComponent,
    PinterestComponent,
    PlatziComponent,
    StoreComponent,
    StoreV2Component,
    StoreV15Component,
    StoreV14Component,
    StoreV13Component,
    StoreV12Component,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class SharedModule { }
