import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  selectedTab: string = 'Home';

  onTabChange(tab: string) {
    this.selectedTab = tab;
  }
}
