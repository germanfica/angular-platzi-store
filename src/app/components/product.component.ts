import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../modules/product.module';

// Decorador
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() product: Product = {} as Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart() {
        console.log('Agregar al carrito');
        this.productClicked.emit(this.product.id);
    }
}