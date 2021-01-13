import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Curso de Angular
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Curso css grid
import { CartComponent } from './components/cart/cart.component';
import { DemoComponent } from './components/demo/demo.component';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';

import { HighlightDirective } from './directives/highlight/highlight.directive';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    PageNotFoundComponent,
    CartComponent,
    // Curso css grid
    DemoComponent,
  ],
  // Esto es la clave para poder utilizar los shared components
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    PageNotFoundComponent,
    CartComponent,
    // Curso css grid
    DemoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class SharedModule { }
