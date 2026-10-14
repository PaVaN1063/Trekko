import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

/**
 * Brand header used on every inner screen: blue gradient with the
 * topographic contour art, an optional back button, title and subtitle.
 * Anything placed inside <ab-header> renders below the title.
 */
@Component({
  selector: 'ab-header',
  template: `
    <header class="ab-header" [class.ab-header--tall]="tall">
      <img class="ab-header__contours" src="assets/illustrations/abstract.png" alt="" aria-hidden="true" />
      <div class="ab-header__bar">
        <button *ngIf="back" type="button" class="ab-icon-btn" aria-label="Go back" (click)="goBack()">
          <ion-icon name="chevron-back"></ion-icon>
        </button>
        <div class="ab-header__titles">
          <h1 class="ab-header__title">{{ title }}</h1>
          <p *ngIf="subtitle" class="ab-header__subtitle">{{ subtitle }}</p>
        </div>
        <ng-content select="[headerAction]"></ng-content>
      </div>
      <ng-content></ng-content>
    </header>
  `,
})
export class AbHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() back = false;
  /** Where to go if there is no history to go back to. */
  @Input() backHref = '/tabs/Home';
  @Input() tall = false;

  constructor(private nav: NavController) {}

  goBack() {
    if (window.history.length > 1) {
      this.nav.back();
    } else {
      this.nav.navigateBack(this.backHref);
    }
  }
}
