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
   * Devuelve todos los productos.
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products_api);
  }

  /**
   * Devuelve un producto dado un id.
   * @param id del producto a obtener.
   */
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(environment.products_api+id);
  }
}
