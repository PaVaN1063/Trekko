import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-Help',
  templateUrl: 'Help.page.html',
  styleUrls: ['Help.page.scss']
})
export class HelpPage {
  
  selectedTab: string = 'trekRoute'; // Initialize with default value


  
  constructor() {}

}
