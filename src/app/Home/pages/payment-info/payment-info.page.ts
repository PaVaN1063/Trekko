import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewDetailsPage } from './view-details/view-details.page';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.page.html',
  styleUrls: ['./payment-info.page.scss'],
})
export class PaymentInfoPage implements OnInit {
  selectedPaymentMethod: string;
  minutes: number = 10;
  seconds: number = 0;
  interval: any;
  constructor(private modalController: ModalController,) {  
    this.selectedPaymentMethod = 'phonepe'; // Default to PhonePe
  }
  private values: string[] = ['first', 'second', 'third'];
  ngOnInit(){
    this.startTimer();
 
  }

  goBack() {
    window.history.back();
  }
   // Open modal
  //  openModal() {
  //   this.isModalOpen = true;
  // }
  async openModal() {
    const modal = await this.modalController.create({
      component: ViewDetailsPage,
      cssClass: 'ionModelCSS'
    });
    return await modal.present();
  }
  // Dismiss modal
  dismissModal() {
    this.modalController.dismiss(null, 'cancel');

  }




  startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(this.interval); // Stop timer when it reaches 0
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval); // Clear the timer when leaving the page
    }
  }

  accordionGroupChange = (ev: any) => {
    const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    console.log(
      `Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value} | Collapsed: ${collapsedItems.join(', ')}`
    );
  };
  }

  
