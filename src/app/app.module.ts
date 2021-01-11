import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CardComponent } from './components/card/card.component';
import { StoreComponent } from './components/store/store.component';
import { StoreV2Component } from './components/store-v2/store-v2.component';
import { StoreV12Component } from './components/store-v12/store-v12.component';
import { StoreV13Component } from './components/store-v13/store-v13.component';
import { StoreV14Component } from './components/store-v14/store-v14.component';
import { StoreV15Component } from './components/store-v15/store-v15.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { PinterestComponent } from './components/pinterest/pinterest.component';
import { PlatziComponent } from './components/platzi/platzi.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directive/highlight.directive';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { DemoComponent } from './components/demo/demo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CardComponent,
    StoreComponent,
    StoreV2Component,
    StoreV12Component,
    StoreV13Component,
    StoreV14Component,
    StoreV15Component,
    InstagramComponent,
    PinterestComponent,
    PlatziComponent,
    ExponentialPipe,
    HighlightDirective,
    ContactComponent,
    ProductsComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
