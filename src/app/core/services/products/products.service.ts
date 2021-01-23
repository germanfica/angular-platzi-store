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
   * @param id Identificador del producto a obtener.
   */
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(environment.products_api + id);
  }

  /**
   * Crea un nuevo producto.
   * @param product Producto a agregar.
   */
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.products_api, product);
  }

  /**
   * Actualiza un producto dado un id.
   * @param product Nuevos valores para actualizar.
   */
  updateProduct(id: string, changes: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(environment.products_api + id, changes);
  }

  /**
   * Elimina un producto dado un id.
   * @param id Identificador del producto a eliminar.
   */
  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(environment.products_api + id);
  }
}
