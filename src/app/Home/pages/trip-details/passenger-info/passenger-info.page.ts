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
    termsAndConditions: {
      agree: false,        // For "I agree to the terms and conditions..."
      agreeAorbo: false    // For "I agree to the Aorbo terms and conditions..."
    },
    amount: 0,
    passengers: [{ name: '', age: '', gender: '' }]
  };

  // Adds a new passenger to the list
  addPassenger() {
    this.formData.passengers.push({ name: '', age: '', gender: '' });
  }

  // Removes a passenger if there is more than one
  removePassenger(index: number) {
    if (this.formData.passengers.length > 1) {
      this.formData.passengers.splice(index, 1);
    }
  }

  // Processes the form data for payment
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
      termsAndConditions: {
        agree: this.formData.termsAndConditions.agree,         // Terms and conditions agreement
        agreeAorbo: this.formData.termsAndConditions.agreeAorbo // Aorbo terms agreement
      }
    };

    // Log form data for debugging purposes
    console.log(formData);
  }

  // Navigate back to the previous page
  goBack() {
    window.history.back();
  }
}
