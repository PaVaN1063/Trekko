import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage {
  promises = [
    { icon: 'shield-checkmark-outline', title: 'Verified operators only', text: 'Every operator is checked for permits, insurance and certified trek leads before they can list.' },
    { icon: 'medkit-outline', title: 'First aid on every trek', text: 'Each group carries a medical kit and oxygen on Himalayan treks.' },
    { icon: 'people-outline', title: 'Lead and sweep', text: 'A trek lead walks in front and a sweep at the back, so no one is left alone.' },
    { icon: 'call-outline', title: '24×7 trek-day helpline', text: 'Call us any time from departure until you are back home.' },
  ];
}
