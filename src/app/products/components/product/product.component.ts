import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@core/models/product';

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

    addCart(): void {
        console.log('Agregar al carrito');
        this.productClicked.emit(this.product.id);
    }
}
