import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { PreferencesInterface } from 'src/app/services/userpreferences.service';

@Component({
  selector: 'app-bookmarksgrid',
  templateUrl: './bookmarksgrid.component.html',
  styleUrls: ['./bookmarksgrid.component.scss'],
})
export class BookmarksgridComponent implements OnInit {
  @Input() preferences: PreferencesInterface | null;

  constructor() {}

  ngOnInit(): void {}

  test() {
    console.log(this.preferences);
  }
}
