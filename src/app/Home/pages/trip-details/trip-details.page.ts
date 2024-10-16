import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { ShareTripPage } from './share-trip/share-trip.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage implements OnInit {
  tab: any;
  ngOnInit() {
    console.log('Page opended');
  }
  constructor(private modalController: ModalController) {
    this.getData();
  }
  selectedSegment = 'Trip Route';
  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  goBack() {
    window.history.back();
  }
  // ngAfterViewInit() {
  //   const swiper = new Swiper('.swiper-container', {
  //     slidesPerView: 2.5, // Display 3.25 slides
  //     spaceBetween: 0.1,
  //     loop: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: null, // Hide navigation arrows
  //       prevEl: null,
  //     },
  //     autoplay: {
  //       delay: 2500,
  //       disableOnInteraction: false,
  //     },
  //   });
  // }
  isArray(content: any): boolean {
    return Array.isArray(content);
  }
  tabs = [
    {
      title: 'Trip Route',
      content: [
        {
          cardTitle: 'Boarding Points',
          cardSubTitle: 'From Destination',
        },
      ],
    },
    {
      title: 'Iternary',
      content: [
        {
          cardTitle: 'Day 1 Activity',
          description: 'Visit to the first campsite, trekking activities.',
        },
        {
          cardTitle: 'Day 2 Activity',
          description: 'Exploring the mountain, outdoor activites.',
        },
        {
          cardTitle: 'Day 3 Activity',
          description: 'Return trek and campsite.',
        },
      ],
    },
    {
      title: 'Amenities',
      content: 'Amenities content',
    },
    {
      title: 'Reviews',
      content: 'Reviews content',
    },
    {
      title: 'Resorts',
      content: 'Resorts content',
    },
    {
      title: 'Activities',
      content: 'Activities content',
    },
    {
      title: 'Cancel Policy',
      content: 'Cancel Policy content',
    },
    {
      title: 'Others',
      content: 'Others content',
    },
  ];
  images = [
    {
      name: 'Trekking1',
      img: 'assets/images/trek1.jpeg',
    },
    {
      name: 'Trekking2',
      img: 'assets/images/trek2.jpg',
    },
    {
      name: 'Trekking1',
      img: 'assets/images/trek1.jpeg',
    },
    {
      name: 'Trekking2',
      img: 'assets/images/trek2.jpg',
    },
  ];
  async openModal() {
    const modal = await this.modalController.create({
      component: ShareTripPage,
      cssClass: 'ionModelCSS',
    });
    return await modal.present();
  }
  // Dismiss modal
  dismissModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  showHeaderTitle = false; // Initially hide the header title

  onScroll(event: any) {
    const scrollTop = event.detail.scrollTop;

    if (scrollTop > 50) {
      // When scrolled more than 50px, show the header title
      this.showHeaderTitle = true;
    } else {
      // Hide the header title when scrolled back up
      this.showHeaderTitle = false;
    }
  }

  records: any = [];
  transactionData: boolean = false;
  search: string = '';
  getData() {
    this.records = [
      {
        logoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7G0MEuj1pEwy-MN5xsPIGGit5lFu6X9CVCw&s',
        serviceProvider: 'Mountain Adventures',
        trekDuration: '5 Days',
        pickupDateTime: '2024-10-15 10:00 AM',
        specialOffer: 'Special offer',
      },
    ];
  }

  onImageLoad() {
    console.log('Image loaded successfully');
  }
  selectedTab: string = 'trekRoute'; // Initialize with default value
}
