import { Component, DebugElement, OnInit } from '@angular/core';
import { Product } from '@core/models/product';

import { ProductsService }from '@core/services/products/products.service';
import { Console } from 'console';

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
    console.log("HOLA!");
  }

  /**
   * Trae los productos
   */
  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
  }

  deleteProduct(id:string) {
    // Sin el subscribe no se borra correctamente
    this.productsService.deleteProduct(id).subscribe((p) => {
      console.log("Producto eliminado con éxito.");
      console.log(p);
      this.fetchProducts();
    });
  }

}
