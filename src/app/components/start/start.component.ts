import { Component, ViewChild } from '@angular/core';
import { start } from 'repl';
import { OpenCloseWindowsService } from '../../services/open-close-windows/open-close-windows.service';
import { StartMenuComponent } from '../start-menu/start-menu.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [StartMenuComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  constructor(private openCloseWindowService : OpenCloseWindowsService){}

  toggleMenu() {
    this.openCloseWindowService.toggleMenu();
  }
}