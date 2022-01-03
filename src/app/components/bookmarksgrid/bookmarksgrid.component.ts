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
  isHovering: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  determineIconSizeForLocalSvg(name: string) {
    let result = { width: '100%', height: '100%' };

    switch (name) {
      case 'Disney Plus':
        result.width = '100%';
        result.height = '90%';
        return result;
        break;
      case 'Netflix':
        result.height = '60%';
        return result;
      case 'Hulu':
        result.width = '6rem';
        result.height = '90%';
        return result;
      case 'Apple TV':
        result.width = '80%';
        return result;
      case 'Amazon Prime':
        result.width = '80%';
        return result;
      default:
        return result;
    }
  }
}
