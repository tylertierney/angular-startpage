import {
  faFacebook,
  faGithub,
  faLinkedin,
  faRedditAlien,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { faAtom, faBolt, faEdit } from '@fortawesome/free-solid-svg-icons';

import { BookmarkInterface } from 'src/app/services/userpreferences.service';

export const placeholderBookmarks: BookmarkInterface[] = [
  {
    name: 'Mail',
    icon: faEnvelope,
    url: 'https://www.gmail.com',
    color: 'white',
    active: true,
    isEditing: false,
  },
  {
    name: 'YouTube',
    icon: faYoutube,
    url: 'https://www.youtube.com',
    color: '#FF0000',
    active: true,
    isEditing: false,
  },
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
  {
    name: 'ChakraUI',
    icon: faBolt,
    url: 'https://chakra-ui.com/docs/getting-started',
    color: '#46c8c1',
    active: true,
    isEditing: false,
  },
  {
    name: 'React Icons',
    icon: faAtom,
    url: 'https://react-icons.github.io/react-icons/',
    color: '#e91e63',
    active: true,
    isEditing: false,
  },
];
