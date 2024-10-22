import { Component } from '@angular/core';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.page.html',
  styleUrls: ['./passenger-info.page.scss'],
})
export class PassengerInfoPage {
  formData = {
    fromDay: '',
    toDay: '',
    emailId: '',
    phoneNumber: '',
    stateOfResidency: '',
    sendUpdatesOnWhatsapp: false,
    freeCancellation: false,
    insuranceDetails: '',
    termsAndConditions: '',
    amount: 0,
    passengers: [{ name: '', age: 0, gender: '' }]
  };

  addPassenger() {
    this.formData.passengers.push({ name: '', age: 0, gender: '' });
  }

  removePassenger(index: number) {
    if (this.formData.passengers.length > 1) {
      this.formData.passengers.splice(index, 1);
    }
  }

  payNow() {
    const formData = {
      passengerDetails: this.formData.passengers,
      contactDetails: {
        emailId: this.formData.emailId,
        phoneNumber: this.formData.phoneNumber,
        stateOfResidency: this.formData.stateOfResidency,
        sendUpdatesOnWhatsapp: this.formData.sendUpdatesOnWhatsapp,
      },
      dateDetails: {
        fromDay: this.formData.fromDay,
        toDay: this.formData.toDay,
      },
      freeCancellation: this.formData.freeCancellation,
      insuranceDetails: this.formData.insuranceDetails,
      termsAndConditions: this.formData.termsAndConditions,
    };
  
    console.log(formData);
  }
  

  goBack() {
    window.history.back();
  }
}
