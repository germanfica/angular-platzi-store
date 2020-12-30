import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  isVisible = true;
  veganFoods = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  addItem(){
    this.veganFoods.push('New item')
  }

  deleteItem(itemIndex: number) {
    this.veganFoods.splice(itemIndex, 1);
  }
}