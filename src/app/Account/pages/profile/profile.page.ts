import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
goBack() {
this.router.navigate(['/tabs/account'])}
  
  profileImage: string = '/src/assets/images/profileman.png'; // Default image
  toDay: string; // Declare toDay property for date input

  constructor(private router: Router) { 
    // Initialize toDay with the current date in 'YYYY-MM-DD' format
    this.toDay = new Date().toISOString().split('T')[0];
    
  }

  ngOnInit() {
  }

  // Method to trigger file input when camera icon is clicked
  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  // Handle file selection
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Set the uploaded image as the profile image
        this.profileImage = e.target.result;
      };
      reader.readAsDataURL(input.files[0]); // Read the file as a Data URL
    }
  }

}
