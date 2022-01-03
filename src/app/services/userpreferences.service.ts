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
  darkColor?: string;
  bookmarks?: BookmarkInterface[];
  showBookmarkColors?: boolean;
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
      darkColor: '#1b1b1b',
      bookmarks: placeholderBookmarks,
      showBookmarkColors: false,
    };

    let infoFromLocalStorage = localStorage.getItem('startpage-info');

    if (infoFromLocalStorage) {
      this.userPreferencesStore.next(JSON.parse(infoFromLocalStorage));
    } else {
      localStorage.setItem('startpage-info', JSON.stringify(defaultPrefs));
      this.userPreferencesStore.next(defaultPrefs);
    }

    return null;
  };

  updateCurrentPrefs = (
    property: string,
    newValue: string | BookmarkInterface[] | boolean
  ) => {
    let infoFromLocalStorage = localStorage.getItem('startpage-info');

    if (infoFromLocalStorage) {
      let asObject = JSON.parse(infoFromLocalStorage);
      asObject[property] = newValue;
      localStorage.setItem('startpage-info', JSON.stringify(asObject));
      this.userPreferencesStore.next(asObject);
    }
  };
}
