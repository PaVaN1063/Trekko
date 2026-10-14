import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ViewDetailsPage } from './view-details/view-details.page';
import { PAYMENT_METHODS, Trek, getTrek } from '../../../shared/mock-data';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.page.html',
  styleUrls: ['./payment-info.page.scss'],
})
export class PaymentInfoPage implements OnInit, OnDestroy {
  trek: Trek;
  pax: number;
  /** Total from the traveller screen (fare + add-ons). */
  subtotal: number;
  booking: any;

  methods = PAYMENT_METHODS;
  selectedPaymentMethod = 'phonepe';
  upiId = '';

  couponCode = '';
  couponApplied = '';
  couponDiscount = 0;
  couponError = '';

  minutes = 10;
  seconds = 0;
  interval?: ReturnType<typeof setInterval>;

  paying = false;
  paid = false;
  bookingRef = '';

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private nav: NavController,
    private modalController: ModalController
  ) {
    const q = route.snapshot.queryParamMap;
    this.trek = getTrek(q.get('id'));
    this.pax = Number(q.get('pax')) || 1;
    this.subtotal = Number(q.get('total')) || this.trek.price * this.pax;
    this.booking = this.router.getCurrentNavigation()?.extras?.state?.['booking'];
  }

  ngOnInit() {
    this.startTimer();
  }

  get addOns(): number {
    return Math.max(0, this.subtotal - this.trek.price * this.pax);
  }

  get payable(): number {
    return Math.max(0, this.subtotal - this.couponDiscount);
  }

  get expired(): boolean {
    return this.minutes === 0 && this.seconds === 0;
  }

  get upiValid(): boolean {
    return /^[\w.-]{2,}@[a-zA-Z]{2,}$/.test(this.upiId.trim());
  }

  applyCoupon() {
    const code = this.couponCode.trim().toUpperCase();
    this.couponError = '';
    if (code === 'FIRSTTREK') {
      this.couponApplied = code;
      this.couponDiscount = 250;
    } else if (this.trek.offer && code === this.trek.offer.code) {
      this.couponError = `${code} is already applied to this fare.`;
    } else {
      this.couponError = `${code || 'This code'} isn't valid for ${this.trek.name}.`;
    }
  }

  removeCoupon() {
    this.couponApplied = '';
    this.couponDiscount = 0;
    this.couponCode = '';
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ViewDetailsPage,
      componentProps: { trekId: this.trek.id, booking: this.booking, pax: this.pax },
      cssClass: 'ionModelCSS',
      breakpoints: [0, 0.8, 1],
      initialBreakpoint: 0.8,
    });
    await modal.present();
  }

  pay() {
    // Mock payment: simulate the gateway round trip.
    this.paying = true;
    setTimeout(() => {
      this.paying = false;
      this.paid = true;
      this.bookingRef = Math.random().toString(36).slice(2, 8).toUpperCase();
      clearInterval(this.interval);
    }, 1400);
  }

  viewBookings() {
    this.nav.navigateRoot('/tabs/MyBookings');
  }

  goBack() {
    this.nav.back();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(this.interval);
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
