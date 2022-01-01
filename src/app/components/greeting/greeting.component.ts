import { Component, OnInit } from '@angular/core';
import greetingTime from 'greeting-time';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  dateAndTime: any = 0;

  constructor() {}

  ngOnInit(): void {}
}
