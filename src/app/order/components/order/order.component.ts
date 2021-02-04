import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '@core/models/product';
import { CartService } from '@core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products$!: Observable<Product[]>;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private _cartService: CartService,
    private _formBuilder: FormBuilder
  ) {
    this.products$ = this._cartService.cart$;
    this.firstFormGroup = {} as FormGroup;
    this.secondFormGroup = {} as FormGroup;
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      // podria crear un Validator para products.length === 0
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
