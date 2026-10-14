import { Component } from '@angular/core';
import { BOOKINGS, Booking, Trek, getOperator, getTrek } from '../shared/mock-data';

type Filter = 'Upcoming' | 'Completed' | 'Cancelled' | 'All';

interface Row {
  booking: Booking;
  trek: Trek;
}

@Component({
  selector: 'app-mybookings',
  templateUrl: './MyBookings.page.html',
  styleUrls: ['./MyBookings.page.scss'],
})
export class MyBookingsPage {
  filters: Filter[] = ['Upcoming', 'Completed', 'Cancelled', 'All'];
  filter: Filter = 'Upcoming';
  open = '';

  rows: Row[] = BOOKINGS.map((booking) => ({ booking, trek: getTrek(booking.trekId) }));

  get visible(): Row[] {
    return this.filter === 'All' ? this.rows : this.rows.filter((r) => r.booking.status === this.filter);
  }

  get upcomingCount() {
    return this.rows.filter((r) => r.booking.status === 'Upcoming').length;
  }

  get completedCount() {
    return this.rows.filter((r) => r.booking.status === 'Completed').length;
  }

  get next(): Row | undefined {
    return this.rows
      .filter((r) => r.booking.status === 'Upcoming')
      .sort((a, b) => a.trek.departure.localeCompare(b.trek.departure))[0];
  }

  daysTo(iso: string): number {
    const ms = new Date(iso).getTime() - Date.now();
    return Math.max(0, Math.ceil(ms / 86_400_000));
  }

  operatorName(id: string) {
    return getOperator(id).name;
  }

  mapsLink(place: string) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
  }

  toggle(id: string) {
    this.open = this.open === id ? '' : id;
  }

  handleRefresh(event: any) {
    setTimeout(() => event.target.complete(), 1200);
  }
}
