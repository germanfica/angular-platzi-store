import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Input() sideHeaderDrawer: any;
  @Input() sideHeaderDrawer: MatDrawer = {} as MatDrawer;
  isMobile: boolean = false;
  innerWidth: number = 0;

  // https://stackoverflow.com/questions/45350716/detecting-real-time-window-size-changes-in-angular-4
  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
    this._updateIsMobile();
  }

  _updateIsMobile() {
    if (innerWidth <= 768) { // 768px portrait
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this._updateIsMobile();
  }

}
