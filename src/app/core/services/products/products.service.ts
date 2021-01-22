import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  /**
   * Devuelve todos los productos del API
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products_api);
  }

  /**
   * Devuelve el id del producto del API
   * @param id
   */
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(environment.products_api+id);
  }
}
