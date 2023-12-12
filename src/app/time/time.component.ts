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
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const date = new Date();
    this.currentTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}