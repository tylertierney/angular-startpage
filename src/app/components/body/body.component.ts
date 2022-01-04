import { Component, OnInit } from '@angular/core';
import { UserpreferencesService } from 'src/app/services/userpreferences.service';
import { Subscription } from 'rxjs';
import { PreferencesInterface } from '../../services/userpreferences.service';
import { PreferencesModalService } from 'src/app/services/preferences-modal.service';

interface ColorChangeDataInterface {
  property: string;
  newValue: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  providers: [UserpreferencesService],
})
export class BodyComponent implements OnInit {
  subscription: Subscription;
  preferences: PreferencesInterface | null;
  prefModalIsOpen: boolean;

  constructor(
    private userPrefService: UserpreferencesService,
    private _preferencesModalService: PreferencesModalService
  ) {
    this.subscription = this._preferencesModalService
      .onToggle()
      .subscribe((value) => (this.prefModalIsOpen = value));
  }

  ngOnInit(): void {
    this.subscription = this.userPrefService.currentUserPreferences.subscribe(
      (preferences) => (this.preferences = preferences)
    );
    this.userPrefService.getInitialPrefsFromLocalStorage();
  }

  toggleShowPrefModal(): void {
    this._preferencesModalService.togglePrefModalShowing();
  }

  handleColorChange(data: any): void {
    this.userPrefService.updateCurrentPrefs(data.property, data.newColor);
  }

  handleNameChange(e: Event): void {
    this.userPrefService.updateCurrentPrefs(
      'name',
      (e.target as HTMLInputElement).value
    );
  }

  handleShowBookmarkColors(e: Event): void {
    let newValue = false;
    if ((e.target as HTMLInputElement).value === 'false') {
      newValue = true;
    }

    this.userPrefService.updateCurrentPrefs('showBookmarkColors', newValue);
  }
}
