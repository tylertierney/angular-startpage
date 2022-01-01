import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faReddit,
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
  faFacebook = faFacebook;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  arr: any[] = [
    {
      name: 'Facebook',
      icon: faFacebook,
      url: 'https://www.facebook.com',
      color: '#4267B2',
      active: false,
    },
    {
      name: 'Linkedin',
      icon: faLinkedin,
      url: 'https://www.linkedin.com',
      color: '#2867B2',
      active: true,
    },
    {
      name: 'Github',
      icon: faGithub,
      url: 'https://www.github.com',
      color: 'white',
      active: true,
    },
    {
      name: 'Reddit',
      icon: faReddit,
      url: 'https://www.reddit.com',
      color: '#FF4500',
      active: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
