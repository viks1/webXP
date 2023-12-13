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
  volumeSliderValueInit: number = 100;
  volumeSliderValue: number = 100;

  sliderToggle(): void {
    this.isSliderHidden = !this.isSliderHidden;
  }

  mute(): void {
    if (this.isMuted===false){
      this.isMuted = true;
      this.volumeSliderValueInit=this.volumeSliderValue;
      this.volumeSliderValue = 0;
    }
    else if (this.isMuted===true){
      this.isMuted=false;
      this.volumeSliderValue=this.volumeSliderValueInit;
    }
  }

  onVolumeChange(event: Event): void {
    console.log("yea");
    this.volumeSliderValue = Number((event.target as HTMLInputElement).value);
    if (this.volumeSliderValue<=1){
      this.isMuted=true;
    }
    else{
      this.isMuted=false;
    }
  }
}