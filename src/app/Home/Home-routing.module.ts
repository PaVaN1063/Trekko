import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './Home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'trip-results',
    loadChildren: () => import('./pages/trip-results/trip-results.module').then( m => m.TripResultsPageModule)
  },
  
  // {
  //   path: 'passenger-info',
  //   loadChildren: () => import('./pages/passenger-info/passenger-info.module').then( m => m.PassengerInfoPageModule)
  // },
  {
    path: 'payment-info',
    loadChildren: () => import('./pages/payment-info/payment-info.module').then( m => m.PaymentInfoPageModule)
  },
  {
    path: 'trip-details',
    loadChildren: () => import('./pages/trip-details/trip-details.module').then( m => m.TripDetailsPageModule)
  },
  {
    path: 'top-trips',
    loadChildren: () => import('./pages/top-trips/top-trips.module').then( m => m.TopTripsPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./pages/offers/offers.module').then( m => m.OffersPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
