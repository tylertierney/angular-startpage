import {
  faAmazon,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faPinterest,
  faRedditAlien,
  faSnapchat,
  faSpotify,
  faTwitter,
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
    name: 'Twitter',
    icon: faTwitter,
    url: 'https://www.twitter.com',
    color: '#1DA1F2',
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
  {
    name: 'Amazon',
    icon: faAmazon,
    url: 'https://www.amazon.com',
    color: '#FF9900',
    active: true,
    isEditing: false,
  },
  {
    name: 'Spotify',
    icon: faSpotify,
    url: 'https://www.spotify.com',
    color: '#1DB954',
    active: true,
    isEditing: false,
  },
  {
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://www.instagram.com',
    color: '#E1306C',
    active: true,
    isEditing: false,
  },
  {
    name: 'Snapchat',
    icon: faSnapchat,
    url: 'https://www.snapchat.com',
    color: '#FFFC00',
    active: true,
    isEditing: false,
  },
  {
    name: 'Pinterest',
    icon: faPinterest,
    url: 'https://www.pinterest.com',
    color: '#E60023',
    active: true,
    isEditing: false,
  },
];
