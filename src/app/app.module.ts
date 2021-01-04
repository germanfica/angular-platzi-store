import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/default/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { StoreV2Component } from './components/store-v2/store-v2.component';
import { StoreV12Component } from './components/store-v12/store-v12.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CardComponent,
    HomeComponent,
    StoreComponent,
    StoreV2Component,
    StoreV12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
