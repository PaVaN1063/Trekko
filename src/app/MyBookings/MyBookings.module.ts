import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyBookingsPage } from './MyBookings.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MyBookingsPageRoutingModule } from './MyBookings-routing.module';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MyBookingsPageRoutingModule
  ],
  declarations: [MyBookingsPage]
})
export class MyBookingsPageModule {}
