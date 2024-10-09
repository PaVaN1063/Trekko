import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareTripPageRoutingModule } from './share-trip-routing.module';

import { ShareTripPage } from './share-trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareTripPageRoutingModule
  ],
  declarations: [ShareTripPage]
})
export class ShareTripPageModule {}
