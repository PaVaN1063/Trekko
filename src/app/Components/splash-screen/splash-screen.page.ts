import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
  progressValue: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startProgress();
  }

  startProgress() {
    const interval = setInterval(() => {
      this.progressValue += 0.01;

      if (this.progressValue >= 1) {
        clearInterval(interval);
        // this.router.navigate(['/login']);
      }
    }, 5);
  }
}
