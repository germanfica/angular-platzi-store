import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { LeftComponent } from './components/left/left.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    HomeComponent,
    LeftComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
