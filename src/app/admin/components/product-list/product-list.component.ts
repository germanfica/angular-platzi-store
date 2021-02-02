import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product';

import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
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
   * Genera una nueva `lista de productos` ignorando el producto eliminado.
   * Esto sigue siendo ineficiente. Lo ideal sería mantener una
   * lista de productos con una cierta cantidad de productos, por ejemplo
   * máximo 10 productos (con un Paginator se solucionaria).
   * @param id Identificador del producto eliminado que se quiere ignorar.
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
