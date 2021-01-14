import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Curso de Angular
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';

// Pipes
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';

// Directives
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    CartComponent,
  ],
  // Esto es la clave para poder utilizarlos en otros componentes
  // solo se necesita importar SharedModule
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    CartComponent,
    CommonModule
  ],
  imports: [
    RouterModule,
  ]
})
export class SharedModule { }
