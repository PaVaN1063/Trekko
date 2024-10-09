import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripDetailsPage } from './trip-details.page';

const routes: Routes = [
  {
    path: '',
    component: TripDetailsPage,
  },
  {
    path: 'passenger-info',
    loadChildren: () =>
      import('./../trip-details/passenger-info/passenger-info.module').then(
        (m) => m.PassengerInfoPageModule
      ),
  },  {
    path: 'share-trip',
    loadChildren: () => import('./share-trip/share-trip.module').then( m => m.ShareTripPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripDetailsPageRoutingModule {}
