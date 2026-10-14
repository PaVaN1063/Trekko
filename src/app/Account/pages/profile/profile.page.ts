import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CURRENT_USER } from '../../../shared/mock-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  profileImage: string = CURRENT_USER.avatar;
  toDay = new Date().toISOString().split('T')[0];
  genders = ['Female', 'Male', 'Other'];
  saving = false;

  form = {
    name: CURRENT_USER.name,
    email: CURRENT_USER.email,
    phone: CURRENT_USER.phone,
    gender: CURRENT_USER.gender,
    dob: CURRENT_USER.dob,
  };

  notifications = [
    { id: 'wa', label: 'WhatsApp updates', hint: 'Tickets, pickup reminders, trek lead contact', on: true },
    { id: 'email', label: 'Email receipts', hint: 'Invoices and booking changes', on: true },
    { id: 'offers', label: 'Offers and new treks', hint: 'Up to 2 messages a week', on: false },
  ];

  constructor(private nav: NavController, private toast: ToastController) {}

  goBack() {
    this.nav.navigateBack('/tabs/account');
  }

  triggerFileInput() {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.profileImage = reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  async save() {
    this.saving = true;
    // Mock save: no profile API yet.
    await new Promise((r) => setTimeout(r, 700));
    this.saving = false;
    const t = await this.toast.create({ message: 'Profile saved', duration: 1600, position: 'top', cssClass: 'toast-green' });
    await t.present();
  }
}
