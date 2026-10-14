import { Component, Input, OnChanges } from '@angular/core';
import { Trek } from '../mock-data';

type FilterId = 'weekend' | 'budget' | 'easy' | 'offer' | 'rated';
type SortId = 'recommended' | 'price' | 'soonest' | 'rating';

/** Filter chips, sort menu and the trek card list with an empty state. */
@Component({
  selector: 'ab-trek-list',
  template: `
    <div class="tl-toolbar rail">
      <button type="button" class="chip" (click)="cycleSort()" aria-label="Change sort order">
        <ion-icon name="swap-vertical"></ion-icon>{{ sortLabel }}
      </button>
      <button
        type="button"
        class="chip"
        *ngFor="let f of filters"
        [class.is-on]="active.has(f.id)"
        (click)="toggle(f.id)"
      >
        <ion-icon *ngIf="active.has(f.id)" name="checkmark"></ion-icon>{{ f.label }}
      </button>
    </div>

    <label class="tl-group panel">
      <span class="tl-group__icon"><ion-icon name="people"></ion-icon></span>
      <span class="tl-group__text">
        <strong>Booking for 6 or more?</strong>
        <small>Get a private batch and up to 12% off.</small>
      </span>
      <ion-toggle [(ngModel)]="groupBooking" aria-label="Booking for a group"></ion-toggle>
    </label>

    <p class="tl-count muted">{{ results.length }} {{ results.length === 1 ? 'trek' : 'treks' }} found</p>

    <div class="tl-list">
      <ab-trek-card *ngFor="let t of results; let i = index; trackBy: byId" [trek]="t" class="rise" [style.--i]="i"></ab-trek-card>
    </div>

    <div class="tl-empty" *ngIf="!results.length">
      <img src="assets/illustrations/NoResultsFound.jpg" alt="" />
      <h3>No treks match these filters</h3>
      <p class="muted">Remove a filter to see more departures.</p>
      <button type="button" class="btn-ghost" (click)="clear()">Clear filters</button>
    </div>
  `,
})
export class TrekListComponent implements OnChanges {
  @Input() treks: Trek[] = [];
  @Input() initialFilters: string[] = [];

  filters: { id: FilterId; label: string }[] = [
    { id: 'weekend', label: 'Weekend' },
    { id: 'budget', label: 'Under ₹3,000' },
    { id: 'easy', label: 'Beginner friendly' },
    { id: 'offer', label: 'Has offer' },
    { id: 'rated', label: 'Rated 4.7+' },
  ];

  private sorts: { id: SortId; label: string }[] = [
    { id: 'recommended', label: 'Recommended' },
    { id: 'price', label: 'Price: low to high' },
    { id: 'soonest', label: 'Leaving soonest' },
    { id: 'rating', label: 'Highest rated' },
  ];

  active = new Set<FilterId>();
  sort: SortId = 'recommended';
  groupBooking = false;
  results: Trek[] = [];

  ngOnChanges() {
    this.active = new Set(this.initialFilters as FilterId[]);
    this.apply();
  }

  get sortLabel(): string {
    return this.sorts.find((s) => s.id === this.sort)!.label;
  }

  toggle(id: FilterId) {
    this.active.has(id) ? this.active.delete(id) : this.active.add(id);
    this.apply();
  }

  cycleSort() {
    const i = this.sorts.findIndex((s) => s.id === this.sort);
    this.sort = this.sorts[(i + 1) % this.sorts.length].id;
    this.apply();
  }

  clear() {
    this.active.clear();
    this.apply();
  }

  byId(_: number, t: Trek) {
    return t.id;
  }

  private apply() {
    let list = this.treks.filter((t) => {
      if (this.active.has('weekend') && !t.tags.includes('Weekend')) return false;
      if (this.active.has('budget') && t.price >= 3000) return false;
      if (this.active.has('easy') && t.difficulty !== 'Easy') return false;
      if (this.active.has('offer') && !t.offer) return false;
      if (this.active.has('rated') && t.rating < 4.7) return false;
      return true;
    });

    switch (this.sort) {
      case 'price':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'soonest':
        list = [...list].sort((a, b) => a.departure.localeCompare(b.departure));
        break;
      case 'rating':
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
    }
    this.results = list;
  }
}
