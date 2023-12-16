import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenCloseWindowsService {

  private isContactHidden = false;
  private isProjectsHidden = false;
  private menuHidden = true;
 
  public contactsWindowToggle(): void {
    this.isContactHidden = !this.isContactHidden;
    const contactWindow = document.getElementById('contact_info');
    if (contactWindow){
    contactWindow.hidden = this.isContactHidden; 
    }
  }

  public projectsWindowToggle(): void {
    this.isProjectsHidden = !this.isProjectsHidden;
    const projectsWindow = document.getElementById('projects_window');
    if (projectsWindow){
    projectsWindow.hidden = this.isProjectsHidden;
    }
  }

  openSite(url: string) {
    window.open(url);
    }

  public toggleMenu() : void{
    this.menuHidden = !this.menuHidden;
    const startMenu = document.getElementById('menu2');
    if (startMenu) {
      startMenu.hidden = this.menuHidden;
    }
  }
}
