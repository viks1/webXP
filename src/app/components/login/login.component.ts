import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.hideAppComponentAfterDelay();
    }
  }

  async hideAppComponentAfterDelay() {
    await this.delay(7000);

    const welcomeScreen = document.querySelector("#welcome_screen");
    if (welcomeScreen) {
      welcomeScreen.setAttribute('style', 'display: none;');
    }
  }
  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
