import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  fromDay: string = '';
  toDay: string = '';
  isWeekendTrekSelected: boolean = false;
  isPersonalizedTrekSelected: boolean = false;

  slides = [
    {
      title: 'Slide 1',
      image: 'assets/images/trek1.jpg',
    },
    {
      title: 'Slide 2',
      image: 'assets/images/trek2.jpg',
    },
    {
      title: 'Slide 3',
      image: 'assets/images/trek3.jpg',
    },
    {
      title: 'Slide 4',
      image: 'assets/images/trek4.jpg',
    },
    {
      title: 'Slide 5',
      image: 'assets/images/trek5.jpg',
    },
   
  ];
  slides1 = [
    {
      title: 'Slide 1',
      image: 'assets/images/trek3.jpg',
    },
    {
      title: 'Slide 2',
      image: 'assets/images/trek4.jpg',
    },
    {
      title: 'Slide 3',
      image: 'assets/images/trek5.jpg',
    },
    {
      title: 'Slide 4',
      image: 'assets/images/trek1.jpg',
    },
    {
      title: 'Slide 5',
      image: 'assets/images/trek2.jpg',
    },
   
  ];
  slides2 = [
    {
      title: 'Slide 1',
      image: 'assets/images/trek5.jpg',
    },
    {
      title: 'Slide 2',
      image: 'assets/images/trek4.jpg',
    },
    {
      title: 'Slide 3',
      image: 'assets/images/trek3.jpg',
    },
    {
      title: 'Slide 4',
      image: 'assets/images/trek2.jpg',
    },
    {
      title: 'Slide 5',
      image: 'assets/images/trek1.jpg',
    },
   
  ];
  weatherAlerts = [
    { id: 1, title: 'Storm warning', image: 'assets/images/bus.jpg' },
    { id: 2, title: 'High winds', image: 'assets/images/bus.jpg' },
    { id: 3, title: 'Heavy rain', image: 'assets/images/bus.jpg' },
    // Add more alerts as needed
  ];
  showClose = {
    weekendTrek: false,
    personalizedTrek: false,
  };
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
      // loop: true,
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
}
