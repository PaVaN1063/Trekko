import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopTripsPage } from './top-trips.page';

const routes: Routes = [
  {
    path: '',
    component: TopTripsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopTripsPageRoutingModule {}
