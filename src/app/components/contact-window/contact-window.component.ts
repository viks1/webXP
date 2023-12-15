import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-window',
  standalone: true,
  imports: [],
  templateUrl: './contact-window.component.html',
  styleUrl: './contact-window.component.scss'
})
export class ContactWindowComponent {

  hideAboutInfo(): void {
    const aboutScreen = document.getElementById("contact_info");
    if (aboutScreen) {
      aboutScreen.hidden = true;
    }
  }

}
