import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PreferencesInterface {
  name?: string;
  darkColor?: string;
  links?: any[];
}

@Injectable({
  providedIn: 'root',
})
export class UserpreferencesService {
  userPreferences: PreferencesInterface | null = null;

  private userPreferencesStore = new BehaviorSubject(this.userPreferences);
  currentUserPreferences = this.userPreferencesStore.asObservable();

  constructor() {}

  getPrefsFromLocalStorage = () => {
    let infoFromLocalStorage = localStorage.getItem('startpage-info');

    if (infoFromLocalStorage) {
      this.userPreferencesStore.next(JSON.parse(infoFromLocalStorage));
    } else {
      localStorage.setItem(
        'startpage-info',
        JSON.stringify({ darkColor: '#141111', name: 'Tyler' })
      );
    }

    return null;
  };
}
