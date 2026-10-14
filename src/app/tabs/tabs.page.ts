import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  selectedTab = 'Home';

  tabs = [
    { id: 'Home', label: 'Explore', icon: 'compass' },
    { id: 'MyBookings', label: 'Bookings', icon: 'ticket' },
    { id: 'Help', label: 'Help', icon: 'chatbubbles' },
    { id: 'account', label: 'Account', icon: 'person-circle' },
  ];

  onTabChange(tab: string) {
    this.selectedTab = tab;
  }
}
