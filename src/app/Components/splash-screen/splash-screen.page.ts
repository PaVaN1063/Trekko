import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit, OnDestroy {
  progressValue = 0;
  private interval?: ReturnType<typeof setInterval>;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startProgress();
  }

  startProgress() {
    this.interval = setInterval(() => {
      this.progressValue = Math.min(1, this.progressValue + 0.0125);
      if (this.progressValue >= 1) {
        clearInterval(this.interval);
        this.router.navigate(['/login'], { replaceUrl: true });
      }
    }, 25);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
