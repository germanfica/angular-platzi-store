import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
