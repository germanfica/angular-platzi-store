import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Curso de Angular
import { HeaderComponent } from './../shared/components/header/header.component';
import { FooterComponent } from './../shared/components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Curso css grid
import { CartComponent } from './components/cart/cart.component';

// Pipes
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';

// Directives
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
  ],
  imports: [
    RouterModule,
  ]
})
export class SharedModule { }
