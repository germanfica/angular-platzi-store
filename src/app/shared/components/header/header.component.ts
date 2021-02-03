import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Product } from '@core/models/product';
import { CartService } from '@core/services/cart/cart.service';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Input() sideHeaderDrawer: any;
  @Input() sideHeaderDrawer: MatDrawer = {} as MatDrawer;
  isDesktop: boolean = true;
  innerWidth: number = 0; // Ancho de la ventana
  // https://angular.io/guide/rx-library#naming-conventions-for-observables
  total$!: Observable<number>;

  constructor(
    // Importamos CartService como una inyección de dependencia
    // en el constructor como una variable privada.
    private cartService: CartService
  ) {
    // Ya no hace falta subscribirse
    this.total$ = this.cartService.cartChange().pipe(
      map((products: Product[]) => products.length)
    );
  }

  ngOnInit(): void {
    this._updateIsDesktop();
  }

  /**
   * Este método me avisa si hubo un cambio en el tamaño de la ventana del navegador.
   * Fuente: https://stackoverflow.com/questions/45350716/detecting-real-time-window-size-changes-in-angular-4
   */
  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
    this._updateIsDesktop();
  }

  /**
   * Actualiza el estado de la variable `isDesktop`.
   */
  _updateIsDesktop() {
    if (innerWidth > 768) {
      // Desktop
      this.isDesktop = true;
    } else {
      // Tablet o Mobile
      this.isDesktop = false;
    }
  }
}
