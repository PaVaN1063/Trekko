import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TREKS, Trek } from '../../../shared/mock-data';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage {
  offerTreks: Trek[] = TREKS.filter((t) => t.offer);
  copied = '';

  constructor(private toast: ToastController) {}

  async copy(code: string) {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // Clipboard can be blocked in some webviews; the toast still shows the code.
    }
    this.copied = code;
    const t = await this.toast.create({ message: `Code ${code} copied`, duration: 1800, position: 'top', cssClass: 'toast-green' });
    await t.present();
  }
}
