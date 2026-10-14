import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import { ShareTripPage } from './share-trip/share-trip.page';
import { RouteStop, Trek, durationLabel, getOperator, getTrek } from '../../../shared/mock-data';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage {
  @ViewChild(IonContent) content!: IonContent;

  trek: Trek;
  saved = false;
  galleryIndex = 0;
  selectedTab = 'route';

  sections = [
    { id: 'route', label: 'Route' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'inclusions', label: 'Inclusions' },
    { id: 'stay', label: 'Stay' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'cancellation', label: 'Cancellation' },
  ];

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private nav: NavController,
    private modalController: ModalController
  ) {
    this.trek = getTrek(route.snapshot.queryParamMap.get('id'));
  }

  get operator() {
    return getOperator(this.trek.operatorId);
  }

  get duration() {
    return durationLabel(this.trek);
  }

  get roundRating() {
    return Math.round(this.trek.rating);
  }

  routeIcon(mode: RouteStop['mode']): string {
    return { bus: 'bus', jeep: 'car-sport', walk: 'walk', camp: 'bonfire', flag: 'flag' }[mode];
  }

  goBack() {
    this.nav.back();
  }

  onGalleryScroll(event: Event) {
    const el = event.target as HTMLElement;
    this.galleryIndex = Math.round(el.scrollLeft / el.clientWidth);
  }

  /** Distance from the top of the scroll area to a section. */
  private async sectionTop(id: string): Promise<number | null> {
    const el = document.getElementById(id);
    if (!el) return null;
    const scroller = await this.content.getScrollElement();
    return el.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop;
  }

  async onScroll(event: any) {
    const scrollTop: number = event.detail.scrollTop;
    let active = this.sections[0].id;
    for (const s of this.sections) {
      const top = await this.sectionTop(s.id);
      if (top !== null && top - 90 <= scrollTop) active = s.id;
    }
    this.selectedTab = active;
  }

  async scrollToSection(sectionId: string) {
    const top = await this.sectionTop(sectionId);
    if (top !== null) {
      this.selectedTab = sectionId;
      await this.content.scrollToPoint(0, top - 60, 450);
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ShareTripPage,
      componentProps: { trekId: this.trek.id },
      cssClass: 'ionModelCSS',
      breakpoints: [0, 0.75, 1],
      initialBreakpoint: 0.75,
    });
    await modal.present();
  }

  book() {
    this.router.navigate(['/tabs/Home/trip-details/passenger-info'], { queryParams: { id: this.trek.id } });
  }
}
