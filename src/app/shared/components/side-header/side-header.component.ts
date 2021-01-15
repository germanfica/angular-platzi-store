import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.scss']
})
export class SideHeaderComponent implements OnInit {
  showFiller = false;
  isCollapse = false;   // guardamos el valor

  toggleState() { // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
