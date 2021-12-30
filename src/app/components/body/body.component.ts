import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
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

  constructor(private userPrefService: UserpreferencesService) {}

  preferences: any;

  ngOnInit(): void {
    this.subscription = this.userPrefService.currentUserPreferences.subscribe(
      (preferences) => (this.preferences = preferences)
    );

    this.preferences = this.userPrefService.getPrefsFromLocalStorage();
  }

  test() {
    console.log(this.preferences);
  }
}
