import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CURRENT_USER, TREKS, WEATHER, Trek, durationLabel } from '../shared/mock-data';

export interface FormData {
  from: string;
  to: string;
  departureDay: string;
  custom: string[] | null;
}

@Component({
  selector: 'app-home',
  templateUrl: './Home.page.html',
  styleUrls: ['./Home.page.scss'],
})
export class HomePage {
  user = CURRENT_USER;
  weather = WEATHER;

  from = 'Bengaluru';
  to = '';
  departureDay = '';
  today = new Date().toISOString().split('T')[0];
  isWeekendTrekSelected = false;
  isPersonalizedTrekSelected = false;

  leavingSoon: Trek[] = [...TREKS].sort((a, b) => a.departure.localeCompare(b.departure)).slice(0, 5);
  offerTreks: Trek[] = TREKS.filter((t) => t.offer);
  topRated: Trek[] = [...TREKS].sort((a, b) => b.rating - a.rating).slice(0, 3);

  constructor(private router: Router) {}

  duration(t: Trek) {
    return durationLabel(t);
  }

  swap() {
    [this.from, this.to] = [this.to, this.from];
  }

  toggleWeekendTrek() {
    this.isWeekendTrekSelected = !this.isWeekendTrekSelected;
  }

  togglePersonalizedTrek() {
    this.isPersonalizedTrekSelected = !this.isPersonalizedTrekSelected;
  }

  handleRefresh(event: any) {
    setTimeout(() => event.target.complete(), 1200);
  }

  private formatDate(dateString: string): string {
    if (!dateString) return '';
    const [yyyy, mm, dd] = dateString.split('-');
    return `${dd}-${mm}-${yyyy}`;
  }

  onSubmit() {
    const custom: string[] = [];
    if (this.isWeekendTrekSelected) custom.push('Weekend Trek');
    if (this.isPersonalizedTrekSelected) custom.push('Personalized Trek');

    const formData: FormData = {
      from: this.from,
      to: this.to,
      departureDay: this.formatDate(this.departureDay),
      custom: custom.length ? custom : null,
    };
    this.router.navigate(['/tabs/Home/trip-results'], { state: { formData } });
  }
}
