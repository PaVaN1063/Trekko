import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../shared/shared.module';

import { TripResultsPageRoutingModule } from './trip-results-routing.module';

import { TripResultsPage } from './trip-results.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TripResultsPageRoutingModule
  ],
  declarations: [TripResultsPage]
})
export class TripResultsPageModule {}
