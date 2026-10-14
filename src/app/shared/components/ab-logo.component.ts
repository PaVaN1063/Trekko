import { Component, Input } from '@angular/core';

/** Trekko lockup: the round illustrated logo next to the "Trekko" wordmark. */
@Component({
  selector: 'ab-logo',
  template: `
    <span class="ab-logo" [class.ab-logo--light]="light" [style.font-size.px]="size">
      <img class="ab-logo__img" src="assets/brand/trekko-logo-160.webp" alt="" />
      <span class="ab-logo__word">Trekko</span>
    </span>
  `,
})
export class AbLogoComponent {
  /** Font size of the wordmark in px; the logo scales with it. */
  @Input() size = 24;
  /** White wordmark for use on the blue gradient. */
  @Input() light = false;
}
