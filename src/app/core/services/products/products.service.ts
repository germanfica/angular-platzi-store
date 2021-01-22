import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsUrl: string = 'http://platzi-store.herokuapp.com/products/';

  constructor(private http: HttpClient) { }

  /**
   * Devuelve todos los productos del API
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  /**
   * Devuelve el id del producto del API
   * @param id
   */
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.productsUrl+id);
  }
}
