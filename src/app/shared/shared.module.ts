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
import { MaterialModule } from '@app/material/material.module';
import { LegacyHeaderComponent } from './components/legacy-header/legacy-header.component';
import { SideHeaderComponent } from './components/side-header/side-header.component';
import { NavigationItemsComponent } from './components/navigation-items/navigation-items.component';

@NgModule({
  declarations: [
    LegacyHeaderComponent,
    HeaderComponent,
    SideHeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    CartComponent,
    NavigationItemsComponent,
  ],
  // Esto es la clave para poder utilizarlos en otros componentes
  // solo se necesita importar SharedModule
  exports: [
    LegacyHeaderComponent,
    HeaderComponent,
    SideHeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    CartComponent,
    CommonModule,
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule
  ]
})
export class SharedModule { }
