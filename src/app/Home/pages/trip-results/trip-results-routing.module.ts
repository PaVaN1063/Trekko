import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripResultsPage } from './trip-results.page';

const routes: Routes = [
  {
    path: '',
    component: TripResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripResultsPageRoutingModule {}
