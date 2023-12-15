import { Component, Output } from '@angular/core';
import { TrayWindowsService } from '../../services/tray-windows/tray-windows.service';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  constructor(private TrayWindowsService : TrayWindowsService){}
  securityWindowToggle() {
    this.TrayWindowsService.securityWindowToggle();
  }
}
