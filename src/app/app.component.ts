import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskbarComponent } from "./components/taskbar/taskbar.component";
import { DesktopComponent } from "./components/desktop/desktop.component";
import { StartComponent } from "./components/start/start.component";
import { StartMenuComponent } from "./components/start-menu/start-menu.component";
import { SecurityComponent } from "./components/security/security.component";
import { TimeComponent } from "./components/time/time.component";
import { VolumeComponent } from "./components/volume/volume.component";
import { ProjectsWindowComponent } from "./components/projects-window/projects-window.component";
import { ContactWindowComponent } from "./components/contact-window/contact-window.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, TaskbarComponent, DesktopComponent, StartComponent, StartMenuComponent, SecurityComponent, TimeComponent, VolumeComponent, ProjectsWindowComponent, ContactWindowComponent]
})
export class AppComponent {
  title = 'webXP';
}