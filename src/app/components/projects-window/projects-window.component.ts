import { Component } from '@angular/core';
import { OpenCloseWindowsService } from '../../services/open-close-windows/open-close-windows.service';

@Component({
  selector: 'app-projects-window',
  standalone: true,
  imports: [],
  templateUrl: './projects-window.component.html',
  styleUrl: './projects-window.component.scss'
})
export class ProjectsWindowComponent {
constructor(private openCloseWindowsService : OpenCloseWindowsService){}

  closeProjectsWindow():void{
    this.openCloseWindowsService.projectsWindowToggle();
  }
  
  openSite(url: string) {
  this.openCloseWindowsService.openSite(url)
}
}
