import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BOOKINGS, FAQS, getTrek } from '../shared/mock-data';

@Component({
  selector: 'app-help',
  templateUrl: './Help.page.html',
  styleUrls: ['./Help.page.scss'],
})
export class HelpPage {
  query = '';
  openFaq = 0;
  faqs = FAQS;

  bookingActions = ['Change pickup point', 'Add a traveller', 'Cancel booking', 'Payment issue'];
  topics = ['Booking & tickets', 'Cancellation & refunds', 'Payment issue', 'Pickup & transport', 'On-trek experience', 'Something else'];
  ticket = { topic: '', message: '' };

  active = (() => {
    const booking = BOOKINGS.find((b) => b.status === 'Upcoming');
    return booking ? { booking, trek: getTrek(booking.trekId) } : undefined;
  })();

  constructor(private toast: ToastController) {}

  get filteredFaqs() {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.faqs;
    return this.faqs.filter((f) => (f.q + ' ' + f.a).toLowerCase().includes(q));
  }

  startTicket(action: string) {
    this.ticket.topic = action === 'Payment issue' ? 'Payment issue' : action === 'Cancel booking' ? 'Cancellation & refunds' : 'Booking & tickets';
    this.ticket.message = `${action} for booking ${this.active?.booking.id}: `;
    document.getElementById('ticket')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async submitTicket() {
    const id = 'SR-' + Math.floor(100000 + Math.random() * 900000);
    this.ticket = { topic: '', message: '' };
    const t = await this.toast.create({
      message: `Message sent. Ticket ${id} — we'll reply on WhatsApp.`,
      duration: 3000,
      position: 'top',
      cssClass: 'toast-green',
    });
    await t.present();
  }
}
