import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trek, getOperator, durationLabel, Operator } from '../mock-data';

/** Trek list card: photo, name, operator, key facts and price. */
@Component({
  selector: 'ab-trek-card',
  template: `
    <article class="trek-card tap" (click)="open()" role="link" tabindex="0" (keyup.enter)="open()">
      <div class="trek-card__photo">
        <img [src]="trek.image" [alt]="trek.name" loading="lazy" />
        <span *ngIf="trek.offer" class="trek-card__offer">{{ trek.offer.label }}</span>
      </div>
      <div class="trek-card__body">
        <div class="trek-card__top">
          <h3 class="trek-card__name">{{ trek.name }}</h3>
          <span class="rating-pill"><ion-icon name="star"></ion-icon>{{ trek.rating }}</span>
        </div>
        <p class="trek-card__meta">{{ trek.region }}, {{ trek.state }}</p>
        <div class="trek-card__facts">
          <span>{{ duration }}</span>
          <span class="dot"></span>
          <span [class]="'difficulty difficulty--' + trek.difficulty.toLowerCase()">{{ trek.difficulty }}</span>
        </div>
        <p class="trek-card__depart">
          <ion-icon name="bus-outline"></ion-icon>
          {{ trek.departure | date: 'EEE, d MMM · h:mm a' : '+0530' }} · {{ trek.pickupCity }}
        </p>
        <div class="trek-card__bottom">
          <span class="op-badge" [style.background]="operator.color">{{ operator.initials }}</span>
          <span class="trek-card__op">{{ operator.name }}</span>
          <span class="trek-card__price">
            <s>{{ trek.originalPrice | inr }}</s>
            <strong>{{ trek.price | inr }}</strong>
          </span>
        </div>
        <p *ngIf="trek.seatsLeft <= 6" class="trek-card__seats">Only {{ trek.seatsLeft }} seats left</p>
      </div>
    </article>
  `,
})
export class TrekCardComponent {
  @Input({ required: true }) trek!: Trek;

  constructor(private router: Router) {}

  get operator(): Operator {
    return getOperator(this.trek.operatorId);
  }

  get duration(): string {
    return durationLabel(this.trek);
  }

  open() {
    this.router.navigate(['/tabs/Home/trip-details'], { queryParams: { id: this.trek.id } });
  }
}
