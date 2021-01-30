import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '@core/models/product';

import { ProductsService } from '@core/services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.form = {} as FormGroup;
    this.buildForm();
  }

  ngOnInit(): void {
  }

  createProduct(event: Event) {
    event.preventDefault();
    if(this.form.valid) {
      const product: Product = this.form.value;
      this.productsService.createProduct(product).subscribe((p) => {
        console.log(p);
        console.log(this.form.value);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required]],
      image: '',
      description: ['', [Validators.required]],
    });
  }
}
