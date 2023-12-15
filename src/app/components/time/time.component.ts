import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [],
  templateUrl: './time.component.html',
  styleUrl: './time.component.scss'
})
export class TimeComponent implements OnInit {
  currentTime: string = '';

  ngOnInit() {
    //setInterval(() => {
      //this.updateTime();
    //},60000 );
    }

  updateTime() {
    try {
      const vreme = new Date();
      this.currentTime = vreme.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (error) {
      console.error('Error updating time:', error);
    }
  }
}