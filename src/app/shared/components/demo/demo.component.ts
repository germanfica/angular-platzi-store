import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';
  isVisible = false;
  veganFoods = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  power = 10;

  addItem(): void{
    this.veganFoods.push('New item');
  }

  deleteItem(itemIndex: number): void {
    this.veganFoods.splice(itemIndex, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
