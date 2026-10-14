import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../shared/shared.module';

import { PassengerInfoPageRoutingModule } from './passenger-info-routing.module';

import { PassengerInfoPage } from './passenger-info.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    PassengerInfoPageRoutingModule
  ],
  declarations: [PassengerInfoPage]
})
export class PassengerInfoPageModule {}
