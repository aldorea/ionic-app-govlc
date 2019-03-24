import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';
import { PlacesRoutingModule } from './places-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlacesRoutingModule,
    HttpClientModule
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}
