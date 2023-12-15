import { Component, Output } from '@angular/core';
import { TrayWindowsService } from '../../services/tray-windows/tray-windows.service';

@Component({
  selector: 'app-volume',
  standalone: true,
  imports: [],
  templateUrl: './volume.component.html',
  styleUrl: './volume.component.scss'
})
export class VolumeComponent {

  constructor(private TrayWindowsService : TrayWindowsService){}

  isMuted: boolean = false;
  volumeSliderValueInit: number = 100;
  volumeSliderValue: number = 100;

  public volumeWindowToggle(): void {
    this.TrayWindowsService.volumeWindowToggle();
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

  getIsMuted(){
     return this.isMuted;
  }

}