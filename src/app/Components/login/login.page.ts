import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ApiService } from '../service/api.service';
import { apis } from '../service/api';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  isModalOpen = false;

  @ViewChild(IonModal) modal: IonModal | any;
  loginForm: FormGroup;
  countdown: number = 60;
  countdownInterval: any;
  endpoint = apis.login;
  otp1: string = '';
  otp2: string = '';
  otp3: string = '';
  otp4: string = '';
  otp5: string = '';
  otp6: string = '';
  isFocused: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ApiService,
    private toastController: ToastController
  ) {
    this.loginForm = this.fb.group({
      phoneno: ['', [Validators.required]],
    });
  }
  
  validateNumeric(event: any) {
    const pattern = /^[0-9]*$/;
    let inputChar = String.fromCharCode(event.inputType === 'deleteContentBackward' ? 0 : event.target.value);
    
    if (!pattern.test(inputChar)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, '');
    }
  }
  
  sendOtp() {
    this.openOtpDialog();
    this.startCountdown(); // Start the countdown
    const phoneNumber = this.loginForm.get('phoneno')?.value;
    console.log('Phone Number:', phoneNumber);
    const body =  phoneNumber ; // Assuming the API requires a JSON object
    this.service.postApi(this.endpoint, body).subscribe(
      (res) => {
        console.log(res.Response);
        
        if (res.Response?.status) {
          this.presentToast(res.Response.message, 3000); // Show success message
        } else {
        }
        
        this.startCountdown();
      },
      (err) => {
        console.error('Error:', err);
      }
    );
  }
  
  startCountdown() {
    this.countdown = 60; // 1 minute
    clearInterval(this.countdownInterval); // Clear any existing intervals
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.countdownInterval);
      }
    }, 1000);
  }

  resendOtp() {
    this.sendOtp(); // Resend OTP and restart the countdown
  }
  openOtpDialog() {
    this.isModalOpen = true;
    this.modal.present();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  confirm() {
    const otpValue = this.otp1 + this.otp2 + this.otp3 + this.otp4 + this.otp5 + this.otp6;
    const phoneNumber = this.loginForm.get('phoneno')?.value;
    console.log('Phone Number:', phoneNumber);
    console.log('Entered OTP:', otpValue); 
    this.modal.dismiss(otpValue, 'confirm');
    this.router.navigate(['tabs/Home']);
  }
  onWillDismiss(event: Event) {
    this.isModalOpen = false;
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log(`OTP confirmed: ${ev.detail.data}`);
    }
  }
  async presentToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'top'
    });
    toast.present();
  }
}
