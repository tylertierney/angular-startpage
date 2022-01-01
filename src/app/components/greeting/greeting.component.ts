import { Component, OnInit, Input } from '@angular/core';
import greetingTime from 'greeting-time';
import { PreferencesInterface } from 'src/app/services/userpreferences.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  @Input() preferences: PreferencesInterface | null;
  weekday: string;
  date: string;
  time: string;
  greeting: string;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      const currentDateAndTime = new Date();
      this.greeting = greetingTime(currentDateAndTime);
      const dateAndTime = currentDateAndTime.toLocaleString('default', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });

      const splitString = dateAndTime.split(',');
      this.weekday = splitString[0];
      this.date = splitString[1];
      this.time = splitString[2];
    }, 1000);
  }
}
