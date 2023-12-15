import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrayWindowsService {

  private isVolumeHidden = true;
  private isSecurityHidden = true;

  public volumeWindowToggle(): void {
    this.isVolumeHidden = !this.isVolumeHidden;
    const volumeWindow = document.getElementById('volume_slider');
    if (volumeWindow){ //null check :)
    volumeWindow.hidden = this.isVolumeHidden
    }
    if (this.getIsSecurityHidden()===false && this.getIsVolumeHidden()===false){
      this.securityWindowToggle();
    }
  }

  public securityWindowToggle(): void {
    this.isSecurityHidden = !this.isSecurityHidden;
    const securityWindow = document.getElementById('security_window');
    if (securityWindow){ //null check :)
    securityWindow.hidden = this.isSecurityHidden;
    }
    if (this.getIsVolumeHidden()===false && this.getIsSecurityHidden()===false){
      this.volumeWindowToggle();
    }
  }

  getIsVolumeHidden() :boolean{
    return this.isVolumeHidden;
  }
  getIsSecurityHidden() :boolean{
    return this.isSecurityHidden;
  }
  public setIsVolumeHidden(flag:boolean) :void{
    this.isVolumeHidden=flag;
  }
  public setIsSecurityHidden(flag:boolean) :void{
    this.isSecurityHidden=flag;
  }
}
