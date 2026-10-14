import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BOOKINGS, CURRENT_USER } from '../shared/mock-data';

interface MenuItem {
  label: string;
  icon: string;
  link: string;
  hint?: string;
  danger?: boolean;
}

@Component({
  selector: 'app-account',
  templateUrl: './Account.page.html',
  styleUrls: ['./Account.page.scss'],
})
export class AccountPage {
  user = CURRENT_USER;
  upcoming = BOOKINGS.filter((b) => b.status === 'Upcoming').length;

  menu: { title: string; items: MenuItem[] }[] = [
    {
      title: 'Your account',
      items: [
        { label: 'Profile & travellers', icon: 'person-outline', link: 'profile', hint: 'Name, email, saved travellers' },
        { label: 'My bookings', icon: 'ticket-outline', link: '/tabs/MyBookings' },
        { label: 'Notifications', icon: 'notifications-outline', link: 'profile', hint: 'WhatsApp and email updates' },
        { label: 'Safety & security', icon: 'shield-checkmark-outline', link: 'aboutus', hint: 'SOS contacts, trek safety' },
      ],
    },
    {
      title: 'More',
      items: [
        { label: 'Help & support', icon: 'chatbubbles-outline', link: '/tabs/Help' },
        { label: 'Become a trek partner', icon: 'briefcase-outline', link: 'aboutus', hint: 'List your treks on Aorbo' },
        { label: 'About Aorbo', icon: 'information-circle-outline', link: 'aboutus' },
        { label: 'Log out', icon: 'log-out-outline', link: '/login', danger: true },
      ],
    },
  ];

  constructor(private toast: ToastController) {}

  async shareCode() {
    const text = 'Use my code ANANYA200 on Aorbo and get ₹200 off your first trek: https://aorbo.in/r/ANANYA200';
    if (navigator.share) {
      await navigator.share({ title: 'Aorbo invite', text }).catch(() => undefined);
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // clipboard may be blocked
    }
    const t = await this.toast.create({ message: 'Invite link copied', duration: 1600, position: 'top', cssClass: 'toast-green' });
    await t.present();
  }
}
