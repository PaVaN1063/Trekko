

import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-MyBookings',
  templateUrl: 'MyBookings.page.html',
  styleUrls: ['MyBookings.page.scss']
})
export class MyBookingsPage  {
 
  records: any = [];
  transactionData: boolean = false;
  search: string = '';
  constructor( private route: Router) { }
  ngOnInit() {
    this.getData()
  }
  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  getData() {
      this.records = [
        {
          serviceProvider: 'John Doe Treks',
          trekDuration: '3 Days, 2 Nights',
          pickupDateTime: '2024-09-01 08:00 AM',
          hasSpecialOffer: false, // No special offer for this record
          specialOffer: '20'
        },
        {
          serviceProvider: 'Mountain Trails',
          trekDuration: '5 Days, 4 Nights',
          pickupDateTime: '2024-09-10 06:30 AM',
          hasSpecialOffer: true, // Indicates this record has a special offer
          specialOffer: '10'
        },
        {
          serviceProvider: 'Adventure Explorers',
          trekDuration: '7 Days, 6 Nights',
          pickupDateTime: '2024-09-15 07:00 AM',
          hasSpecialOffer: false, // No special offer for this record
          specialOffer: '15'
        },
        {
          serviceProvider: 'Mountain Trails',
          trekDuration: '5 Days, 4 Nights',
          pickupDateTime: '2024-09-10 06:30 AM',
          hasSpecialOffer: true, // Indicates this record has a special offer
          specialOffer: '10'
        },
        {
          serviceProvider: 'Adventure Explorers',
          trekDuration: '7 Days, 6 Nights',
          pickupDateTime: '2024-09-15 07:00 AM',
          hasSpecialOffer: true, // Indicates this record has a special offer
          specialOffer: '15'
        },
        {
          serviceProvider: 'Mountain Trails',
          trekDuration: '5 Days, 4 Nights',
          pickupDateTime: '2024-09-10 06:30 AM',
          hasSpecialOffer: false, // Indicates this record has a special offer
          specialOffer: '10'
        },
        {
          serviceProvider: 'Adventure Explorers',
          trekDuration: '7 Days, 6 Nights',
          pickupDateTime: '2024-09-15 07:00 AM',
          hasSpecialOffer: true, // Indicates this record has a special offer
          specialOffer: '15'
        }
      ];

  console.log(this.records);
  this.transactionData = this.records.length > 0;
  }

}
