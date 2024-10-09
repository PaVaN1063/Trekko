import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassengerInfoPageRoutingModule } from './passenger-info-routing.module';

import { PassengerInfoPage } from './passenger-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassengerInfoPageRoutingModule
  ],
  declarations: [PassengerInfoPage]
})
export class PassengerInfoPageModule {}
