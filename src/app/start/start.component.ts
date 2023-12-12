import { Component, ViewChild } from '@angular/core';
import { start } from 'repl';
import { StartMenuComponent } from '../start-menu/start-menu.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [StartMenuComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  @ViewChild(StartMenuComponent, { static: false }) startMenuComponent!: StartMenuComponent;
  menuHidden = true;

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
    if (this.startMenuComponent) {
      this.startMenuComponent.isMenuHidden = this.menuHidden;
    }
  }
}