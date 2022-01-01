import { Component, OnInit } from '@angular/core';
import { UserpreferencesService } from 'src/app/services/userpreferences.service';
import { Subscription } from 'rxjs';
import { PreferencesInterface } from '../../services/userpreferences.service';
import { PreferencesModalService } from 'src/app/services/preferences-modal.service';

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
    this.userPrefService.getPrefsFromLocalStorage();
  }

  toggleShowPrefModal(): void {
    console.log(this.preferences);
    this._preferencesModalService.togglePrefModalShowing();
  }

  handleColorChange(e: any): void {
    localStorage.setItem(
      'startpage-info',
      JSON.stringify({ darkColor: e.target.value })
    );
    this.userPrefService.getPrefsFromLocalStorage();
  }
}
