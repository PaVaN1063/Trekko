import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
export interface FormData {
  from: string;
  to: string;
  departureDay: string;
  custom: string[] | null;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  fromDay: string = '';
  toDay: string = '';
  departureDay: string = '';
  isWeekendTrekSelected: boolean = false;
  isPersonalizedTrekSelected: boolean = false;
  private formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const yyyy = date.getFullYear();
    return `${dd}${mm}${yyyy}`; // Format as ddmmyyyy
  }
  slides = [
    {
      title: 'Slide 1',
      image: 'assets/icons/icon-72.webp',
    },
    {
      title: 'Slide 2',
      image: 'assets/icons/icon-72.webp',
    },
    {
      title: 'Slide 3',
      image: 'assets/icons/icon-72.webp',
    },
    {
      title: 'Slide 4',
      image: 'assets/icons/icon-72.webp',
    },
    {
      title: 'Slide 5',
      image: 'assets/icons/icon-72.webp',
    },
  ];

  weatherAlerts = [
    { id: 1, title: 'Storm warning', image: 'assets/images/bus.jpg' },
    { id: 2, title: 'High winds', image: 'assets/images/bus.jpg' },
    { id: 3, title: 'Heavy rain', image: 'assets/images/bus.jpg' },
    // Add more alerts as needed
  ];

  constructor() {}
  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  onFromDayChange(event: any) {
    this.fromDay = event.detail.value;
    console.log(this.fromDay);
  }

  onToDayChange(event: any) {
    this.toDay = event.detail.value;
  }
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3.5, // Display 3.25 slides
      spaceBetween: 0.2,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: null, // Hide navigation arrows
        prevEl: null,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
  toggleWeekendTrek() {
    this.isWeekendTrekSelected = !this.isWeekendTrekSelected;
  }

  togglePersonalizedTrek() {
    this.isPersonalizedTrekSelected = !this.isPersonalizedTrekSelected;
  }


  onSubmit() {
    const customSelections: string[] = [];

    if (this.isWeekendTrekSelected) {
      customSelections.push('Weekend Trek');
    }

    if (this.isPersonalizedTrekSelected) {
      customSelections.push('Personalized Trek');
    }

    const formData = {
      from: this.fromDay,
      to: this.toDay,
      departureDay: this.formatDate(this.departureDay), // Format date as ddmmyyyy
      custom: customSelections.length > 0 ? customSelections : null,
    };

    console.log(formData);
    this.router.navigate(['/tabs/Home/trip-results'])
  }
  
}
