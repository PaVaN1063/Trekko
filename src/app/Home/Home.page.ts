import { Component, AfterViewInit, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit, OnInit {
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
  constructor(private animationCtrl: AnimationController, private router:Router) {}
  ngOnInit() {
    this.animateCardsSequentially();
  }

  animateCardsSequentially() {
    const elements = document.querySelectorAll(
      '.top-trips-card, .offers-card, .trek-shorts-card, .weather-section'
    );

    elements.forEach((el, index) => {
      const animation = this.animationCtrl
        .create()
        .addElement(el)
        .duration(500) // Duration for each animation
        .delay(index * 300) // Delay between each card animation
        .fromTo('transform', 'translateY(100%)', 'translateY(0)')
        .fromTo('opacity', '0', '1');

      animation.play();
    });
  }
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
