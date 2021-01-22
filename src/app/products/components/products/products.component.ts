import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product';
import { ProductsService } from '@core/services/products/products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [] as Product[];

  constructor(private route: ActivatedRoute,
    private productsService: ProductsService
    ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number): void {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products
    });
  }
}
