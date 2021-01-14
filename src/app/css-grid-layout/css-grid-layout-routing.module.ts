import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { PinterestComponent } from './components/pinterest/pinterest.component';
import { PlatziComponent } from './components/platzi/platzi.component';
import { StoreComponent } from './components/store/store.component';
import { StoreV2Component } from './components/store-v2/store-v2.component';
import { StoreV12Component } from './components/store-v12/store-v12.component';
import { StoreV13Component } from './components/store-v13/store-v13.component';
import { StoreV14Component } from './components/store-v14/store-v14.component';
import { StoreV15Component } from './components/store-v15/store-v15.component';

const routes: Routes = [
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'instagram',
    component: InstagramComponent
  },
  {
    path: 'pinterest',
    component: PinterestComponent
  },
  {
    path: 'platzi',
    component: PlatziComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'store-v2',
    component: StoreV2Component
  },
  {
    path: 'store-v12',
    component: StoreV12Component
  },
  {
    path: 'store-v13',
    component: StoreV13Component
  },
  {
    path: 'store-v14',
    component: StoreV14Component
  },
  {
    path: 'store-v15',
    component: StoreV15Component
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CssGridLayoutRoutingModule { }
