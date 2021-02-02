import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@core/models/product';

import { CartService } from '@core/services/cart/cart.service';

// Decorator
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() product: Product = {} as Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        // Importamos CartService como una inyección de dependencia
        // en el constructor como una variable privada.
        private cartService: CartService
    ) { }

    addCart(): void {
        console.log('Agregar al carrito');
        // this.productClicked.emit(this.product.id);
        this.cartService.addCart(this.product);
    }
}
