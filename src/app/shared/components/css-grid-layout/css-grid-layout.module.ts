import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CssGridLayoutRoutingModule } from './css-grid-layout-routing.module';

import { InstagramComponent } from './components/instagram/instagram.component';
import { PinterestComponent } from './components/pinterest/pinterest.component';
import { PlatziComponent } from './components/platzi/platzi.component';
import { StoreComponent } from './components/store/store.component';
import { StoreV2Component } from './components/store-v2/store-v2.component';
import { StoreV12Component } from './components/store-v12/store-v12.component';
import { StoreV13Component } from './components/store-v13/store-v13.component';
import { StoreV14Component } from './components/store-v14/store-v14.component';
import { StoreV15Component } from './components/store-v15/store-v15.component';

@NgModule({
  declarations: [
    InstagramComponent,
    PinterestComponent,
    PlatziComponent,
    StoreComponent,
    StoreV2Component,
    StoreV15Component,
    StoreV14Component,
    StoreV13Component,
    StoreV12Component,
  ],
  imports: [
    SharedModule,
    CssGridLayoutRoutingModule
  ]
})
export class CssGridLayoutModule { }
