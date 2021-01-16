import { Injectable } from '@angular/core';
import { NavItemNode } from '@core/models/nav-item-node';

@Injectable({
  providedIn: 'root'
})
export class NavigationItemsService {
  navItemTree: NavItemNode[] = [
    {
      name: 'Home',
      path: 'home'
    },
    {
      name: 'Products',
      path: 'products'
    },
    {
      name: 'Contact',
      path: 'contact'
    },
    {
      name: 'Demo',
      path: 'demo'
    },
    {
      name: 'CSS Grid Layout',
      path: 'css-grid-layout',
      children: [
        { name: 'Instagram', path: 'instagram' },
        { name: 'Pinterest', path: 'pinterest' },
        { name: 'Platzi', path: 'platzi' },
        { name: 'Store', path: 'store' },
        { name: 'Store v2', path: 'store-v2' },
        { name: 'Store v12', path: 'store-v12' },
        { name: 'Store v13', path: 'store-v13' },
        { name: 'Store v14', path: 'store-v14' },
        { name: 'Store v15', path: 'store-v15' },
      ]
    }
  ];

  /// Obtiene todos los items para el header o side header
  getNavItems(): NavItemNode[] {
    return this.navItemTree;
  }

  constructor() { }
}
