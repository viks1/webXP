import { Component } from '@angular/core';
import { VolumeComponent } from "../volume/volume.component";
import { TimeComponent } from "../time/time.component";
import { SecurityComponent } from "../security/security.component";
import { StartComponent } from "../start/start.component";

@Component({
    selector: 'app-taskbar',
    standalone: true,
    templateUrl: './taskbar.component.html',
    styleUrl: './taskbar.component.scss',
    imports: [VolumeComponent, TimeComponent, SecurityComponent, StartComponent]
})
export class TaskbarComponent {

}