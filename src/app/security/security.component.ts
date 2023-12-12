import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  isSecurityWindowHidden = true;

  toggleSecurityWindow() {
    this.isSecurityWindowHidden = !this.isSecurityWindowHidden;
  }

  hideSecurityWindow() {
    this.isSecurityWindowHidden = true;
  }
}
