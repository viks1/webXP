import { Component } from '@angular/core';

@Component({
  selector: 'app-volume',
  standalone: true,
  imports: [],
  templateUrl: './volume.component.html',
  styleUrl: './volume.component.scss'
})
export class VolumeComponent {
  isSliderHidden: boolean = true;
  isMuted: boolean = false;
  volumeSliderValue: number = 100;

  sliderToggle(): void {
    this.isSliderHidden = !this.isSliderHidden;
  }

  mute(): void {
    this.isMuted = !this.isMuted;
  }

  onVolumeChange(event: Event): void {
    this.volumeSliderValue = Number((event.target as HTMLInputElement).value);
  }
}