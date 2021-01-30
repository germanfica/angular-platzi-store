import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product';

import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  /**
   * Trae los productos del servidor.
   */
  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
  }

  /**
   * Genera una nueva `lista de productos` pero ignorando el producto especificado
   * por parámetro. Esto sigue siendo ineficiente. Lo ideal sería mantener una
   * lista de productos con una cierta cantidad de productos, por ejemplo
   * máximo 10 productos (con un Paginator se solucionaria).
   * @param id Identificador del producto que se quiere ignorar.
   */
  filterProducts(id: string) {
    this.products = this.products.filter(product => product.id !== id);
  }

  // spliceProduct(product: Product) {}
  // binarySearch(products: Product[], left: number, right: number, id: string): number {return -1;}

  /**
   * Elimina un producto.
   * @param id Identificador del producto a eliminar.
   */
  deleteProduct(id: string) {
    // Sin el subscribe no se borra correctamente
    this.productsService.deleteProduct(id).subscribe((p) => {
      console.log("Producto eliminado con éxito.");
      console.log(p);
      this.filterProducts(id);
    });
  }
}
