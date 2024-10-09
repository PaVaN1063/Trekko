import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';
import { apis } from '../service/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  signupForm: FormGroup; // Explicitly define as FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private toastController: ToastController,
    private router: Router
  ) {
    // Initialize signupForm with an empty FormGroup
    this.signupForm = this.formBuilder.group({}); // Initialize here
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]],
      terms: [false, Validators.requiredTrue]
    });
  }

  async onSubmit() {
    if (this.signupForm.valid) {
      const response = await this.postMethod();
      // Check if the response status is true or false and display the appropriate message
      if (response.status) {
        this.presentToast(response.message); // success message
      } else {
        this.presentToast(response.message); // error message
      }
      this.router.navigate(["/"])
    } else {
      console.log('Form is invalid');
      this.presentToast('Please fill in the form correctly.');
    }
  }
  
  async postMethod() {
    const data = this.signupForm.value;
    const body = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.mobileNumber,
      roleId: 1
    };
    try {
      console.log(body);
      
      const endpoint = apis.postRegistration; 
      const response = await this.service.postApi(endpoint, body).toPromise();
      // const response = "Hi Hello"
      // this.presentToast(response);

      this.presentToast(response.message);
      // Return the response from the API (assumes response includes a status and message)
      return response; 
      
      
    } catch (error) {
      console.error('Error:', error);
      // Return a default error response if an exception occurs
      return { status: false, message: 'An error occurred. Please try again.' };
    }
  }
  

  async presentToast(message: string, duration: number = 5000) {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'top',
      cssClass: 'toast-green' // Add the custom class for green color
    });
    toast.present();
    this.signupForm.reset();
    this.router.navigate(['/login']);
  }
  
}
