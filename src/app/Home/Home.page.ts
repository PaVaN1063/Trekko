import { Component, AfterViewInit, OnInit } from '@angular/core';
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
    return `${dd}-${mm}-${yyyy}`; // Format as dd-mm-yyyy
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
  //wheather alerts
  weatherAlerts1 = [
    { city: 'Tadepallegudem', time: '5:27 PM', temperature: 23, condition: 'Mostly Cloudy', high: 32, low: 26, backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1664112065598-77832fcd9b8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5fGVufDB8fDB8fHww' },
    { city: 'Coimbatore',time: '5:27 PM', temperature: 25, condition: 'Cloudy', high: 28, low: 22, backgroundImage: 'url(data:image/jpeg;base64,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)' },
    { city: 'Visakhapatnam',time: '5:27 PM', temperature: 29, condition: 'Mostly Cloudy', high: 32, low: 26, backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1673278171570-18af2a6ece31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdWR5fGVufDB8fDB8fHww' },
    { city: 'Hyderabad', time: '5:27 PM',temperature: 27, condition: 'Cloudy', high: 30, low: 22, backgroundImage: 'url(data:image/jpeg;base64,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)' },
    { city: 'Pedatadepalli', time: '5:27 PM',temperature: 23, condition: 'Mostly Cloudy', high: 32, low: 26, backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1664112065598-77832fcd9b8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5fGVufDB8fDB8fHww' }
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
  
    const formData: FormData = {
      from: this.fromDay,
      to: this.toDay,
      departureDay: this.formatDate(this.departureDay), // Format date as ddmmyyyy
      custom: customSelections.length > 0 ? customSelections : null,
    };
  
    console.log(formData);
  
    // Navigate to the trip-results page and pass the formData
    this.router.navigate(['/tabs/Home/trip-results'], { state: { formData } });
  }
  
}
