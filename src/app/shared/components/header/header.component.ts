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
  isDesktop: boolean = true;
  innerWidth: number = 0; // Ancho de la ventana

  // https://stackoverflow.com/questions/45350716/detecting-real-time-window-size-changes-in-angular-4
  /**
   * Este método me avisa si hubo un cambio en el tamaño de la ventana del navegador.
   */
  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
    this._updateIsDesktop();
  }

  /**
   * Actualiza el estado de la variable `isDesktop`.
   */
  _updateIsDesktop() {
    if (innerWidth > 768) {
      // Desktop
      this.isDesktop = true;
    } else {
      // Tablet o Mobile
      this.isDesktop = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this._updateIsDesktop();
  }

}
