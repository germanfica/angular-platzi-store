import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../../../../core/services/products/products.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [] as Product[];

  clickProduct(id: number): void {
    console.log('product');
    console.log(id);
  }

  constructor(private route: ActivatedRoute,
    private productsService: ProductsService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // Trae todos los productos
      this.products = this.productsService.getAllProducts();
    });
  }
}
