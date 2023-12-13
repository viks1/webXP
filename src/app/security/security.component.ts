import { Component } from '@angular/core';
import { VolumeComponent } from '../volume/volume.component';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  volumeComponent = new VolumeComponent;
  isSecurityWindowHidden = true;

  toggleSecurityWindow() {
    this.isSecurityWindowHidden = !this.isSecurityWindowHidden;
    this.volumeComponent.isSliderHidden=true;
  }

  hideSecurityWindow() {
    this.isSecurityWindowHidden = true;
  }
}
