import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-share-trip',
  templateUrl: './share-trip.page.html',
  styleUrls: ['./share-trip.page.scss'],
})
export class ShareTripPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal | any;

  constructor(private modalController: ModalController,) { }

  ngOnInit() {
    this.getData()
  }
  dismissModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  records: any = [];
  transactionData: boolean = false;
  search: string = '';
  getData() {
    this.records = [
      {
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7G0MEuj1pEwy-MN5xsPIGGit5lFu6X9CVCw&s',
        serviceProvider: 'Mountain Adventures',
        trekDuration: '5 Days',
        pickupDateTime: '2024-10-15 10:00 AM',
        specialOffer: 'Special offer'
      },
    ];

console.log(this.records);
this.transactionData = this.records.length > 0;
}
}
