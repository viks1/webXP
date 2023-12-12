import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-start-menu',
  standalone: true,
  imports: [],
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss'
})
export class StartMenuComponent {
  @Input() isMenuHidden: boolean = false;
  
  showAboutInfo(): void {
    const aboutScreen = document.getElementById('contact_info');
    if (aboutScreen) {
      aboutScreen.hidden = false;
    }
  }

  showProjectsWindow(): void {
    const projectsScreen = document.getElementById('projects_window');
    if (projectsScreen) {
      projectsScreen.hidden = false;
    }
  }

  openSite(url: string) {
    window.open(url);
}

  reloadPage(): void{
    window.location.reload();
  }
}
