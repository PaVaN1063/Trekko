import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { ApiService } from '../service/api.service';
import { apis } from '../service/api';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  signupForm: FormGroup;
  submitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private toastController: ToastController,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]],
      terms: [false, Validators.requiredTrue],
    });
  }

  showError(name: string): boolean {
    const ctrl = this.signupForm.get(name);
    return !!ctrl && ctrl.touched && ctrl.invalid;
  }

  digitsOnly(event: Event) {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '').slice(0, 10);
    if (digits !== input.value) {
      input.value = digits;
      this.signupForm.get('mobileNumber')?.setValue(digits);
    }
  }

  async onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      if (this.signupForm.get('terms')?.invalid) {
        this.presentToast('Please accept the Terms of Use to continue.');
      }
      return;
    }

    this.submitting = true;
    const data = this.signupForm.value;
    const body = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.mobileNumber,
      roleId: 1,
    };

    try {
      const response = await firstValueFrom(this.service.postApi(apis.postRegistration, body));
      await this.presentToast(response?.message ?? 'Account created. Log in with your mobile number.', 'toast-green');
      this.signupForm.reset({ terms: false });
      this.router.navigate(['/login']);
    } catch {
      await this.presentToast("We couldn't create your account. Check your connection and try again.");
    } finally {
      this.submitting = false;
    }
  }

  private async presentToast(message: string, cssClass = '') {
    const toast = await this.toastController.create({ message, duration: 3500, position: 'top', cssClass });
    await toast.present();
  }
}
