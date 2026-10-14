import { Component } from '@angular/core';
import { TREKS, Trek } from '../../../shared/mock-data';

@Component({
  selector: 'app-top-trips',
  templateUrl: './top-trips.page.html',
  styleUrls: ['./top-trips.page.scss'],
})
export class TopTripsPage {
  treks: Trek[] = [...TREKS].sort((a, b) => b.rating - a.rating);
}
