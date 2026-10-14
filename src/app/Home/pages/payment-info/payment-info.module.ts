import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../shared/shared.module';

import { PaymentInfoPageRoutingModule } from './payment-info-routing.module';

import { PaymentInfoPage } from './payment-info.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentInfoPageRoutingModule
  ],
  declarations: [PaymentInfoPage]
})
export class PaymentInfoPageModule {}
