import { Injectable } from '@angular/core';

import { Product } from '@core/models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart: BehaviorSubject<Product[]>;
  cart$!: Observable<Product[]>;

  constructor() {
    this.cart = new BehaviorSubject<Product[]>([]);
    this.cart$ = this.cart.asObservable();
  }

  /**
   * Observable that will start listening to cart updates when a consumer subscribes.
   * 
   * Sources:
   * - https://angular.io/guide/observables
   * - https://angular.io/guide/observables-in-angular
   * - https://stackoverflow.com/questions/37671700/angular2-style-guide-property-with-dollar-sign
   */
  // cartChange(): Observable<Product[]> {
  //   return this.cart.asObservable();
  // }

  /**
   * Agrega un nuevo producto al carrito de compras.
   * @param product El producto a agregar.
   */
  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }

  /**
   * Quita el conjunto de un producto del carrito.
   * @param productId Identificador del producto.
   */
  removeFromCart(productId: String) {
    this.products = this.products.filter(product => product.id !== productId);
    this.cart.next(this.products);
  }

  /**
   * Quita un producto especifico del carrito.
   * @param productId Identificador del producto.
   */
  remove(productId: String): void {
    let i: number = this.products.length - 1;
    let productFound: Boolean = false;
    let aux: Product[] = [];

    while (i >= 0) {
      if (!productFound && this.products[i].id === productId) {
        productFound = true;
      } else {
        aux.unshift(this.products[i]);
      }
      i--;
    }

    this.products = aux;
    this.cart.next(aux);
  }
}
