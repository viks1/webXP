import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-window',
  standalone: true,
  imports: [],
  templateUrl: './projects-window.component.html',
  styleUrl: './projects-window.component.scss'
})
export class ProjectsWindowComponent {

  hideProjectsWindow() :void{
  var projectsScreen = document.getElementById("projects_window");
  if (projectsScreen){
      projectsScreen.hidden = true;
  }
}

  openSite(url: string) {
  window.open(url);
}
}
