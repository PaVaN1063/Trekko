// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-passenger-info',
//   templateUrl: './passenger-info.page.html',
//   styleUrls: ['./passenger-info.page.scss'],
// })
// export class PassengerInfoPage implements OnInit {
//   fromDay: string = 'XXXXXXXXXXX';
//   toDay: string = 'XXXXXXXXXXX';
//   emailId: string = '';
//   phoneNumber: string = '';
//   stateOfResidency: string = '';
//   sendUpdatesOnWhatsapp: boolean = false;
//   constructor() { }

//   onFromDayChange(event: any) {
//     this.fromDay = event.detail.value;
//   }

//   onToDayChange(event: any) {
//     this.toDay = event.detail.value;
//   }

//   onEmailIdChange(event: any) {
//     this.emailId = event.detail.value;
//   }

//   onPhoneNumberChange(event: any) {
//     this.phoneNumber = event.detail.value;
//   }

//   onStateOfResidencyChange(event: any) {
//     this.stateOfResidency = event.detail.value;
//   }

//   onSendUpdatesOnWhatsappChange(event: any) {
//     this.sendUpdatesOnWhatsapp = event.detail.checked;
//   }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.page.html',
  styleUrls: ['./passenger-info.page.scss'],
})
export class PassengerInfoPage implements OnInit {
  // Existing properties
  fromDay: string = '';
  toDay: string = '';
  emailId: string = '';
  phoneNumber: string = '';
  stateOfResidency: string = '';
  sendUpdatesOnWhatsapp: boolean = false;

  // New properties
  amount: number = 0;
  accNum: string = '';
  showHeaderTitle = false; // Initially hide the header title

  constructor() {}

  // Lifecycle hook
  ngOnInit() {
    // Initialization logic if needed
  }
  goBack() {
    window.history.back();
  }
  
  onScroll(event: any) {
    const scrollTop = event.detail.scrollTop;

    if (scrollTop > 50) {
      // When scrolled more than 50px, show the header title
      this.showHeaderTitle = true;
    } else {
      // Hide the header title when scrolled back up
      this.showHeaderTitle = false;
    }
  }

  handleRefresh(event: any) {
    // Handle the pull-to-refresh action here
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  // Methods to handle changes
  onFromDayChange(event: any) {
    this.fromDay = event.detail.value;
  }

  onToDayChange(event: any) {
    this.toDay = event.detail.value;
  }

  onEmailIdChange(event: any) {
    this.emailId = event.detail.value;
  }

  onPhoneNumberChange(event: any) {
    this.phoneNumber = event.detail.value;
  }

  onStateOfResidencyChange(event: any) {
    this.stateOfResidency = event.detail.value;
  }

  onSendUpdatesOnWhatsappChange(event: any) {
    this.sendUpdatesOnWhatsapp = event.detail.checked;
  }
  
}
