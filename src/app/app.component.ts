import { Component } from '@angular/core';
import { Product } from './components/product/product.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  isVisible = false;
  veganFoods = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers 1',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers 2',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  addItem(): void{
    this.veganFoods.push('New item');
  }

  deleteItem(itemIndex: number): void {
    this.veganFoods.splice(itemIndex, 1);
  }

  clickProduct(id: number): void {
    console.log('product');
    console.log(id);
  }
}
