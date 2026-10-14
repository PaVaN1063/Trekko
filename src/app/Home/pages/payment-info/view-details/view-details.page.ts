import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CURRENT_USER, Trek, getOperator, getTrek } from '../../../../shared/mock-data';

interface Traveller {
  name: string;
  age: number | null;
  gender: string;
}

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.page.html',
  styleUrls: ['./view-details.page.scss'],
})
export class ViewDetailsPage implements OnInit {
  @Input() trekId?: string;
  @Input() booking?: any;
  @Input() pax = 1;

  trek!: Trek;
  travellers: Traveller[] = [];
  contact = { phone: '', email: '', state: '' };

  constructor(private modalController: ModalController, private nav: NavController) {}

  ngOnInit() {
    this.trek = getTrek(this.trekId);
    this.travellers = this.booking?.passengers ?? [
      { name: CURRENT_USER.name, age: 29, gender: CURRENT_USER.gender },
      ...Array.from({ length: Math.max(0, this.pax - 1) }, () => ({ name: '', age: null, gender: '' })),
    ];
    this.contact = {
      phone: this.booking?.phoneNumber ?? CURRENT_USER.phone,
      email: this.booking?.emailId ?? CURRENT_USER.email,
      state: this.booking?.stateOfResidency ?? 'Karnataka',
    };
  }

  get operator() {
    return getOperator(this.trek.operatorId);
  }

  async dismissModal() {
    const top = await this.modalController.getTop();
    if (top) {
      await this.modalController.dismiss(null, 'cancel');
    } else {
      this.nav.back();
    }
  }
}
