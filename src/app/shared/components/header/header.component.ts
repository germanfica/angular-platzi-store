import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Input() sideHeaderDrawer: any;
  @Input() sideHeaderDrawer: MatDrawer = {} as MatDrawer;
  
  constructor() { }

  ngOnInit(): void {
  }

}
