import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '@core/models/product';

import { ProductsService } from '@core/services/products/products.service';
import { Router } from '@angular/router';
import { MyCustomValidators } from '@util/validators';

import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.form = {} as FormGroup;
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyCustomValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]],
    });
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

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
  }

  get priceField() {
    return this.form.get('price');
  }

  // Sólo una prueba
  // prueba() {
  //   console.log(this.form.get('price')?.hasError('price_invalid'));
  // }
}
