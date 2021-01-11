import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { ProductComponent } from './../../../shared/components/product/product.component';
import { Product } from '../../../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
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

  constructor() { }

  getAllProducts(): Product[] {
    return this.products;
  }

  //find(item => id === item.id)
  getProduct(id: string): Product {
    const product: Product = this.products.find(element => element.id === id) as Product;

    // return this.products.find(element => element.id === id) as Product; // Eso tenia que hacer nada mas
    // const p: Product = {
    //   id: '6',
    //   image: 'assets/images/stickers2.png',
    //   title: 'Stickers 2',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // };

    // console.log("HELLOOO");
    // console.log("asd4: " + this.products.find(element => element.id)?.description);
    
    // console.log("asd5: " + this.products.find(element => element.id === id)?.image);
    // https://stackoverflow.com/questions/41336663/console-logresult-returns-object-object-how-do-i-get-result-name
    // console.log("asd6"+JSON.stringify(product));

    return product;
  }

}
