import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { UserpreferencesService } from 'src/app/services/userpreferences.service';
import { UiserviceService } from 'src/app/services/uiservice.service';
import { Subscription } from 'rxjs';
import { PreferencesInterface } from '../../services/userpreferences.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  providers: [UserpreferencesService],
})
export class BodyComponent implements OnInit {
  subscription: Subscription;
  prefModalIsOpen: boolean = false;
  preferences: PreferencesInterface | null;

  constructor(
    private userPrefService: UserpreferencesService,
    private uiService: UiserviceService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.prefModalIsOpen = value));
  }

  ngOnInit(): void {
    this.subscription = this.userPrefService.currentUserPreferences.subscribe(
      (preferences) => (this.preferences = preferences)
    );
    this.userPrefService.getPrefsFromLocalStorage();

    if (!this.preferences) {
      this.prefModalIsOpen = true;
    }
  }

  test() {
    console.log(this.prefModalIsOpen);
  }

  openPreferences() {
    this.uiService.togglePrefModalShowing();
  }
}
