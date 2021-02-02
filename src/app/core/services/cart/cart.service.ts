import { Injectable } from '@angular/core';

import { Product } from '@core/models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart: BehaviorSubject<Product[]>;

  constructor() {
    this.cart = new BehaviorSubject<Product[]>([]);
  }

  /**
   * Observable that will start listening to cart updates when a consumer subscribes.
   * 
   * Sources:
   * - https://angular.io/guide/observables
   * - https://angular.io/guide/observables-in-angular
   * - https://stackoverflow.com/questions/37671700/angular2-style-guide-property-with-dollar-sign
   */
  cartChange(): Observable<Product[]> {
    return this.cart.asObservable();
  }

  /**
   * Agrega un nuevo producto al carrito de compras.
   * @param product El producto a agregar.
   */
  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
