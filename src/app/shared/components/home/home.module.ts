import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { LeftComponent } from './components/left/left.component';
import { ContentComponent } from './components/content/content.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../../../shared/shared.module';
import { CoreModule } from './../../../core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
    LeftComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
