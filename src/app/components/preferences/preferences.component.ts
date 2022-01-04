import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import {
  faCog,
  faSync,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { PreferencesInterface } from 'src/app/services/userpreferences.service';
import { placeholderBackgrounds } from 'src/app/placeholderBackgrounds';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent implements OnInit, OnChanges {
  @Output() toggleShowPrefModal = new EventEmitter();
  @Output() handleNameChange = new EventEmitter();
  @Output() handleShowBookmarkColors = new EventEmitter();
  @Output() handleColorChange = new EventEmitter<{
    newColor: string;
    property: string;
  }>();
  @Output() handleBackgroundImgChange = new EventEmitter();
  @Input() preferences: PreferencesInterface | null;
  name: string | undefined;
  wavesColor: string | undefined;
  greetingTextColor: string | undefined;
  showBookmarkColors: boolean | undefined;
  currentBackgroundName: string | undefined;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  faCog = faCog;
  faSync = faSync;

  constructor() {}

  ngOnInit(): void {
    this.name = this.preferences?.name;
    this.wavesColor = this.preferences?.wavesColor;
    this.greetingTextColor = this.preferences?.greetingTextColor;
    this.showBookmarkColors = this.preferences?.showBookmarkColors;
    this.currentBackgroundName = this.preferences?.backgroundImg?.name;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showBookmarkColors =
      changes['preferences'].currentValue.showBookmarkColors;
  }

  onClick() {
    this.toggleShowPrefModal.emit();
  }

  stopPropagation(e: Event): void {
    e.stopPropagation();
  }

  onColorChange(e: Event, property: string) {
    let newColor = (e.target as HTMLInputElement).value;
    this.handleColorChange.emit({ newColor, property });
  }

  onNameChange(e: Event) {
    this.handleNameChange.emit(e);
  }

  onShowColorChange(e: Event) {
    this.handleShowBookmarkColors.emit(e);
  }

  handleResetPrefs() {
    localStorage.clear();
    window.location.reload();
  }

  // bgSelectIsActive: boolean = false;
  currentChevronIcon: any = faChevronDown;

  bgOptionsList: any[] = placeholderBackgrounds;

  // toggleBgSelectChevron() {
  //   this.bgSelectIsActive = !this.bgSelectIsActive;

  //   if (this.bgSelectIsActive) {
  //     this.currentChevronIcon = faChevronUp;
  //   } else {
  //     this.currentChevronIcon = faChevronDown;
  //   }
  // }

  onBackgroundImgChange(e: Event) {
    this.handleBackgroundImgChange.emit(e);
  }
}
