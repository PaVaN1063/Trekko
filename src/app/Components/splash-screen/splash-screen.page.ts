import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type Phase = 'showcase' | 'logo' | 'loading' | 'done';

/** Ring circumference for r = 122 */
const CIRCUMFERENCE = 2 * Math.PI * 122;

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit, OnDestroy {
  phase: Phase = 'showcase';
  progressValue = 0;

  private timers: ReturnType<typeof setTimeout>[] = [];
  private interval?: ReturnType<typeof setInterval>;

  constructor(private router: Router) {}

  get percent(): number {
    return Math.round(this.progressValue * 100);
  }

  get dashOffset(): number {
    return CIRCUMFERENCE * (1 - this.progressValue);
  }

  ngOnInit() {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    // Showcase the artwork, close it into the logo, then run the trail loader.
    this.at(reduced ? 0 : 2200, () => (this.phase = 'logo'));
    this.at(reduced ? 0 : 3000, () => this.startProgress());
  }

  private at(ms: number, fn: () => void) {
    this.timers.push(setTimeout(fn, ms));
  }

  private startProgress() {
    this.phase = 'loading';
    const started = performance.now();
    const duration = 1800;
    this.interval = setInterval(() => {
      const t = Math.min(1, (performance.now() - started) / duration);
      this.progressValue = 1 - Math.pow(1 - t, 2); // ease-out
      if (t >= 1) {
        clearInterval(this.interval);
        this.phase = 'done';
        this.at(650, () => this.router.navigate(['/login'], { replaceUrl: true }));
      }
    }, 30);
  }

  ngOnDestroy() {
    this.timers.forEach(clearTimeout);
    clearInterval(this.interval);
  }
}
