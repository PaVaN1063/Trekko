import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CURRENT_USER, INDIAN_STATES, Trek, getTrek } from '../../../../shared/mock-data';

interface Passenger {
  name: string;
  age: number | null;
  gender: string;
}

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.page.html',
  styleUrls: ['./passenger-info.page.scss'],
})
export class PassengerInfoPage {
  trek: Trek;
  states = INDIAN_STATES;
  genders = ['Female', 'Male', 'Other'];
  addOnPrices = { freeCancellation: 199, insurance: 99 };

  formData = {
    emailId: CURRENT_USER.email,
    phoneNumber: CURRENT_USER.phone.replace(/\s/g, ''),
    stateOfResidency: 'Karnataka',
    sendUpdatesOnWhatsapp: true,
    freeCancellation: false,
    insurance: true,
    termsAndConditions: { agree: false, agreeTrekko: false },
    passengers: [{ name: CURRENT_USER.name, age: 29, gender: CURRENT_USER.gender }] as Passenger[],
  };

  constructor(route: ActivatedRoute, private router: Router, private nav: NavController) {
    this.trek = getTrek(route.snapshot.queryParamMap.get('id'));
  }

  get gendersFilled(): boolean {
    return this.formData.passengers.every((p) => !!p.gender);
  }

  get total(): number {
    const pax = this.formData.passengers.length;
    let perPerson = this.trek.price;
    if (this.formData.freeCancellation) perPerson += this.addOnPrices.freeCancellation;
    if (this.formData.insurance) perPerson += this.addOnPrices.insurance;
    return perPerson * pax;
  }

  addPassenger() {
    this.formData.passengers.push({ name: '', age: null, gender: '' });
  }

  removePassenger(index: number) {
    if (this.formData.passengers.length > 1) {
      this.formData.passengers.splice(index, 1);
    }
  }

  payNow() {
    this.router.navigate(['/tabs/Home/payment-info'], {
      queryParams: { id: this.trek.id, pax: this.formData.passengers.length, total: this.total },
      state: { booking: this.formData },
    });
  }

  goBack() {
    this.nav.back();
  }
}
