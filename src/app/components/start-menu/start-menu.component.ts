import { Component, Input } from '@angular/core';
import { OpenCloseWindowsService } from '../../services/open-close-windows/open-close-windows.service';

@Component({
  selector: 'app-start-menu',
  standalone: true,
  imports: [],
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss'
})
export class StartMenuComponent {
  constructor(private openCloseWindowsService : OpenCloseWindowsService){}
    
    showContactsWindow(): void {
    if (document.getElementById("contact_info")?.hidden==true){
    this.openCloseWindowsService.contactsWindowToggle();
    }
  }

  showProjectsWindow(): void {
    if (document.getElementById("projects_window")?.hidden==true){
    this.openCloseWindowsService.projectsWindowToggle();
    }
  }

  openSite(url: string) {
    this.openCloseWindowsService.openSite(url);
}

  reloadPage(): void{
    window.location.reload();
  }
}
