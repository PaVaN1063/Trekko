import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TREKS, Trek } from '../../../shared/mock-data';

interface SearchData {
  from: string;
  to: string;
  departureDay: string; // dd-mm-yyyy
  custom: string[] | null;
}

@Component({
  selector: 'app-trip-results',
  templateUrl: './trip-results.page.html',
  styleUrls: ['./trip-results.page.scss'],
})
export class TripResultsPage {
  formData?: SearchData;
  treks: Trek[] = TREKS;
  initialFilters: ('weekend')[] = [];
  title = 'All treks';
  subtitle = 'Departing from Bengaluru';

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras?.state;
    this.formData = state?.['formData'];
    if (this.formData) {
      this.applySearch(this.formData);
    }
  }

  private applySearch(search: SearchData) {
    const to = search.to.trim().toLowerCase();
    const matches = TREKS.filter((t) =>
      [t.name, t.region, t.state].some((v) => v.toLowerCase().includes(to))
    );
    // Show close matches first, but never an empty screen for a mock search.
    this.treks = matches.length ? matches : TREKS;
    this.title = search.to ? `${search.from || 'Anywhere'} → ${search.to}` : 'All treks';
    const date = search.departureDay ? this.prettyDate(search.departureDay) : 'Any date';
    this.subtitle = matches.length
      ? `${date} · ${matches.length} matching ${matches.length === 1 ? 'trek' : 'treks'}`
      : `${date} · No exact match, showing all treks`;
    if (search.custom?.includes('Weekend Trek')) this.initialFilters = ['weekend'];
  }

  private prettyDate(ddmmyyyy: string): string {
    const [dd, mm, yyyy] = ddmmyyyy.split('-').map(Number);
    return new Date(yyyy, mm - 1, dd).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
  }
}
