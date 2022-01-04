import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { faCog, faSync } from '@fortawesome/free-solid-svg-icons';
import { PreferencesInterface } from 'src/app/services/userpreferences.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent implements OnInit, OnChanges {
  @Output() toggleShowPrefModal = new EventEmitter();
  // @Output() handleColorChange = new EventEmitter();
  @Output() handleNameChange = new EventEmitter();
  @Output() handleShowBookmarkColors = new EventEmitter();
  @Output() handleColorChange = new EventEmitter<{
    newColor: string;
    property: string;
  }>();
  @Input() preferences: PreferencesInterface | null;
  name: string | undefined;
  wavesColor: string | undefined;
  greetingTextColor: string | undefined;
  showBookmarkColors: boolean | undefined;

  faCog = faCog;
  faSync = faSync;

  constructor() {}

  ngOnInit(): void {
    this.name = this.preferences?.name;
    this.wavesColor = this.preferences?.wavesColor;
    this.greetingTextColor = this.preferences?.greetingTextColor;
    this.showBookmarkColors = this.preferences?.showBookmarkColors;
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
}
