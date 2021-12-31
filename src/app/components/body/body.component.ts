import { Component, OnInit } from '@angular/core';
import { UserpreferencesService } from 'src/app/services/userpreferences.service';
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
  preferences: PreferencesInterface | null;

  constructor(private userPrefService: UserpreferencesService) {}

  ngOnInit(): void {
    this.subscription = this.userPrefService.currentUserPreferences.subscribe(
      (preferences) => (this.preferences = preferences)
    );
    this.userPrefService.getPrefsFromLocalStorage();

    // if (!this.preferences) {
    //   this.prefModalIsOpen = true;
    // }
  }
}
