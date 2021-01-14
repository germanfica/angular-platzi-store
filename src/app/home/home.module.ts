import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './../home/components/home/home.component';
import { LeftComponent } from './../home/components/left/left.component';
import { ContentComponent } from './../home/components/content/content.component';

@NgModule({
  declarations: [
    HomeComponent,
    LeftComponent,
    ContentComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
