import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '@core/models/product';
import { ProductsService } from '@core/services/products/products.service';
import { MyCustomValidators } from '@util/validators';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit {
  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.form = {} as FormGroup;
    this.id = "";
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe((product: Product) => {
        // this.form.patchValue({
        //   id: product.id,
        //   title: product.title,
        //   price: product.price,
        //   image: product.image,
        //   description: product.description
        // });
        this.form.patchValue(product);
      })
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyCustomValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product: Product = this.form.value;
      this.productsService.updateProduct(this.id, product).subscribe((p) => {
        console.log(p);
        console.log(this.form.value);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get priceField() {
    return this.form.get('price');
  }
}
