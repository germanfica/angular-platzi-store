import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '@core/models/product';

import { ProductsService } from '@core/services/products/products.service';
import { Router } from '@angular/router';
import { MyCustomValidators } from '@util/validators';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent implements OnInit {
  form: FormGroup;
  image$!: Observable<any>;

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

  get priceField() {
    return this.form.get('price');
  }

  createProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
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
    // const name = 'image.png';
    const name = file.name;
    const fileRef = this.storage.ref(name);
    const task: AngularFireUploadTask = this.storage.upload(name, file); // lo sube a firebase storage

    task.snapshotChanges()
    .pipe(
      // pipe finalize
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe((url: string) => {
          console.log(url);
          this.setImageField(url);
        });
      })
    )
    .subscribe();

    console.log(file);
  }

  setImageField(url: string) {
    this.form.get('image')?.setValue(url);
  }

  // Sólo una prueba
  // prueba() {
  //   console.log(this.form.get('price')?.hasError('price_invalid'));
  // }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyCustomValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]],
    });
  }
}
