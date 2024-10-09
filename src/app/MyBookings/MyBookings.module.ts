import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyBookingsPage } from './MyBookings.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MyBookingsPageRoutingModule } from './MyBookings-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MyBookingsPageRoutingModule
  ],
  declarations: [MyBookingsPage]
})
export class MyBookingsPageModule {}
