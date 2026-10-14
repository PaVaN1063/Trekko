import { Component, Input } from '@angular/core';

/**
 * Trekko wordmark: "trekk" set in Bricolage Grotesque, with the summit mark
 * standing in for the final "o".
 */
@Component({
  selector: 'ab-logo',
  template: `
    <span class="ab-logo" [class.ab-logo--light]="light" [style.font-size.px]="size" role="img" aria-label="Trekko">
      <span class="ab-logo__word" aria-hidden="true">trekk</span>
      <img class="ab-logo__o" src="assets/brand/trekko-mark.svg" alt="" aria-hidden="true" />
    </span>
  `,
})
export class AbLogoComponent {
  /** Font size in px; the mark scales with it. */
  @Input() size = 28;
  /** White text for use on the blue gradient. */
  @Input() light = false;
}
