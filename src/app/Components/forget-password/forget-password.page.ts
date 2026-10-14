import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage {
  email = '';
  sent = false;

  send() {
    // Mock: no recovery API yet, so show the confirmation state.
    this.sent = true;
  }
}
