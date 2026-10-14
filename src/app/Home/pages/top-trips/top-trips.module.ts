import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../shared/shared.module';

import { TopTripsPageRoutingModule } from './top-trips-routing.module';

import { TopTripsPage } from './top-trips.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TopTripsPageRoutingModule
  ],
  declarations: [TopTripsPage]
})
export class TopTripsPageModule {}
