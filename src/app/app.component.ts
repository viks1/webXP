import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskbarComponent } from "./taskbar/taskbar.component";
import { DesktopComponent } from "./desktop/desktop.component";
import { StartComponent } from "./start/start.component";
import { StartMenuComponent } from "./start-menu/start-menu.component";
import { SecurityComponent } from "./security/security.component";
import { TimeComponent } from "./time/time.component";
import { VolumeComponent } from "./volume/volume.component";
import { ProjectsWindowComponent } from "./projects-window/projects-window.component";
import { ContactWindowComponent } from "./contact-window/contact-window.component";

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