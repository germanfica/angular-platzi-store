import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../core/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

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

      const product = this.productsService.getProduct(id);
      console.log(product);
    });
  }
}
