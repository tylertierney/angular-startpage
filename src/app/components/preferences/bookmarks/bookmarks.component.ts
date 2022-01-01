import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faReddit,
  faRedditAlien,
} from '@fortawesome/free-brands-svg-icons';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
  isEditing: boolean = false;
  faEdit = faEdit;

  arr: any[] = [
    {
      name: 'Linkedin',
      icon: faLinkedin,
      url: 'https://www.linkedin.com',
      color: '#2867B2',
      active: true,
      isEditing: false,
    },
    {
      name: 'Github',
      icon: faGithub,
      url: 'https://www.github.com',
      color: 'white',
      active: true,
      isEditing: false,
    },
    {
      name: 'Facebook',
      icon: faFacebook,
      url: 'https://www.facebook.com',
      color: '#4267B2',
      active: false,
      isEditing: false,
    },
    {
      name: 'Reddit',
      icon: faRedditAlien,
      url: 'https://www.reddit.com',
      color: '#FF4500',
      active: true,
      isEditing: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleListItemClick(index: number) {
    this.arr[index].active = !this.arr[index].active;
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  turnOnEditing(index: number, e: Event) {
    this.arr[index].isEditing = !this.arr[index].isEditing;
    e.stopPropagation();
  }
}
