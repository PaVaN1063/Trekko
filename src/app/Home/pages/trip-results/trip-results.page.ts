// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-trip-results',
//   templateUrl: './trip-results.page.html',
//   styleUrls: ['./trip-results.page.scss'],
// })
// export class TripResultsPage implements OnInit {
//   services: any[] = [];
//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-results',
  templateUrl: './trip-results.page.html',
  styleUrls: ['./trip-results.page.scss'],
})
export class TripResultsPage implements OnInit {
  services: any[] = [];
currentDate: any;
transactionData: boolean = false;
  constructor() { }
  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  ngOnInit() {
    this.services = [
      {
        name: 'Service Provider 1',
        offer: 'Special Discount',
        trekDuration: '10 days',
        pickupDateTime: '2023-12-25 10:00:00',
      },
      {
        name: 'Service Provider 2',
        offer: 'Early Bird Offer',
        trekDuration: '7 days',
        pickupDateTime: '2024-01-05  08:30:00',
      },
      {
        name:'Service Provider 3',
        offer: 'Special Offer',
        trekDuration:'5 Days',
        pickupDateTime:'2024-09-11 11:00:00',
      
      }
      // Add more service provider objects here...
    ];
  }

  
  menus = [
    {
      title:"Filters",
      icon:""
    },
    {
      title:"Sort",
      icon:""
    },
    {
      title:"Offers",
      icon:""
    },
    {
      title:"Solo-Traveller",
      icon:""
    },
    {
      title:"High Rated Treks",
      icon:""
    },
    ];

    records = [
      {
        serviceProvider: 'John Doe Treks',
        trekDuration: '3 Days, 2 Nights',
        pickupDateTime: '2024-09-01 08:00 AM',
        hasSpecialOffer: false,
        specialOffer: '20% OFF',
      },
      {
        serviceProvider: 'Mountain Trails',
        trekDuration: '5 Days, 4 Nights',
        pickupDateTime: '2024-09-10 06:30 AM',
        hasSpecialOffer: true,
        specialOffer: '10% OFF',
      },
      {
        serviceProvider: 'Adventure Explorers',
        trekDuration: '7 Days, 6 Nights',
        pickupDateTime: '2024-09-15 07:00 AM',
        hasSpecialOffer: false,
        specialOffer: '15% OFF',
      },
      {
        serviceProvider: 'Mountain Trails',
        trekDuration: '5 Days, 4 Nights',
        pickupDateTime: '2024-09-10 06:30 AM',
        hasSpecialOffer: true,
        specialOffer: '10% OFF',
      },
      {
        serviceProvider: 'Adventure Explorers',
        trekDuration: '7 Days, 6 Nights',
        pickupDateTime: '2024-09-15 07:00 AM',
        hasSpecialOffer: true,
        specialOffer: '15% OFF',
      },
      {
        serviceProvider: 'Mountain Trails',
        trekDuration: '5 Days, 4 Nights',
        pickupDateTime: '2024-09-10 06:30 AM',
        hasSpecialOffer: false,
        specialOffer: '10% OFF',
      },
      {
        serviceProvider: 'Adventure Explorers',
        trekDuration: '7 Days, 6 Nights',
        pickupDateTime: '2024-09-15 07:00 AM',
        hasSpecialOffer: true,
        specialOffer: '15% OFF',
      },
    ];
}
