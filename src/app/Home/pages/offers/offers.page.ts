import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
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
          specialOffer: '20% OFF'
        },
        {
          serviceProvider: 'Mountain Trails',
          trekDuration: '5 Days, 4 Nights',
          pickupDateTime: '2024-09-10 06:30 AM',
          hasSpecialOffer: true, // Indicates this record has a special offer
          specialOffer: '10% OFF'
        },
        {
          serviceProvider: 'Adventure Explorers',
          trekDuration: '7 Days, 6 Nights',
          pickupDateTime: '2024-09-15 07:00 AM',
          hasSpecialOffer: false, // No special offer for this record
          specialOffer: '15% OFF'
        },
        {
          serviceProvider: 'Mountain Trails',
          trekDuration: '5 Days, 4 Nights',
          pickupDateTime: '2024-09-10 06:30 AM',
          hasSpecialOffer: true, // Indicates this record has a special offer
          specialOffer: '10% OFF'
        },
        {
          serviceProvider: 'Adventure Explorers',
          trekDuration: '7 Days, 6 Nights',
          pickupDateTime: '2024-09-15 07:00 AM',
          hasSpecialOffer: true, // Indicates this record has a special offer
          specialOffer: '15% OFF'
        },
        {
          serviceProvider: 'Mountain Trails',
          trekDuration: '5 Days, 4 Nights',
          pickupDateTime: '2024-09-10 06:30 AM',
          hasSpecialOffer: false, // Indicates this record has a special offer
          specialOffer: '10% OFF'
        },
        {
          serviceProvider: 'Adventure Explorers',
          trekDuration: '7 Days, 6 Nights',
          pickupDateTime: '2024-09-15 07:00 AM',
          hasSpecialOffer: true, // Indicates this record has a special offer
          specialOffer: '15% OFF'
        }
      ];

  console.log(this.records);
  this.transactionData = this.records.length > 0;
  }

}
