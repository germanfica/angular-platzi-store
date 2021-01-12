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
import { DemoComponent } from './components/demo/demo.component';

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
    DemoComponent,
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
    DemoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class SharedModule { }
