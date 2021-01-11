import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product = {} as Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log("id: " + id);
      // Todos los productos
      // const products = this.productsService.getAllProducts();
      // console.log(products);

      this.product = this.productsService.getProduct(id);
      console.log(this.product);
    });
  }
}
