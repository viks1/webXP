import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.hideAppComponentAfterDelay();
    }
  }

  async hideAppComponentAfterDelay() {
    await this.delay(5000);

    const loadingScreen = document.querySelector(".windows__bg");
    if (loadingScreen) {
      loadingScreen.setAttribute('style', 'display: none;');
    }
  }
  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
