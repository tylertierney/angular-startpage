import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { placeholderBookmarks } from '../placeholderBookmarks';

export interface BookmarkInterface {
  name: string;
  icon: IconDefinition;
  url: string;
  color: string;
  active: boolean;
  isEditing?: boolean;
  localSvg?: string | undefined | null;
}

export interface PreferencesInterface {
  name?: string;
  wavesColor?: string;
  greetingTextColor?: string;
  bookmarks?: BookmarkInterface[];
  showBookmarkColors?: boolean;
  backgroundImg?: {
    name: string;
    url: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class UserpreferencesService {
  userPreferences: PreferencesInterface | null = null;

  private userPreferencesStore = new BehaviorSubject(this.userPreferences);
  currentUserPreferences = this.userPreferencesStore.asObservable();

  constructor() {}

  getInitialPrefsFromLocalStorage = () => {
    const defaultPrefs = {
      name: 'friend!',
      wavesColor: '#1b1b1b',
      greetingTextColor: '#b4b4b4',
      bookmarks: placeholderBookmarks,
      showBookmarkColors: false,
      backgroundImg: {
        name: 'Waves',
        url: '',
      },
    };

    let infoFromLocalStorage = localStorage.getItem('startpage-info');

    if (infoFromLocalStorage) {
      const parsed = JSON.parse(infoFromLocalStorage);
      this.setCustomColorVar('--wavesColor', parsed.wavesColor);
      this.setCustomColorVar('--greetingTextColor', parsed.greetingTextColor);
      this.userPreferencesStore.next(parsed);
    } else {
      localStorage.setItem('startpage-info', JSON.stringify(defaultPrefs));
      this.setCustomColorVar('--wavesColor', defaultPrefs.wavesColor);
      this.setCustomColorVar(
        '--greetingTextColor',
        defaultPrefs.greetingTextColor
      );
      this.userPreferencesStore.next(defaultPrefs);
    }

    return null;
  };

  setCustomColorVar(property: string, color: string) {
    document.documentElement.style.setProperty(property, color);
  }

  updateCurrentPrefs = (
    property: string,
    newValue: string | BookmarkInterface[] | boolean
  ) => {
    let infoFromLocalStorage = localStorage.getItem('startpage-info');

    if (infoFromLocalStorage) {
      let asObject = JSON.parse(infoFromLocalStorage);
      asObject[property] = newValue;
      this.setCustomColorVar('--wavesColor', asObject.wavesColor);
      this.setCustomColorVar('--greetingTextColor', asObject.greetingTextColor);
      localStorage.setItem('startpage-info', JSON.stringify(asObject));
      this.userPreferencesStore.next(asObject);
    }
  };
}
