import { Component } from '@angular/core';
import { OpenCloseWindowsService } from '../../services/open-close-windows/open-close-windows.service';

@Component({
  selector: 'app-contact-window',
  standalone: true,
  imports: [],
  templateUrl: './contact-window.component.html',
  styleUrl: './contact-window.component.scss'
})
export class ContactWindowComponent {
  constructor(private openCloseWindowService : OpenCloseWindowsService){}

  public hideContactWindow(): void {
    this.openCloseWindowService.contactsWindowToggle();
  }
}
