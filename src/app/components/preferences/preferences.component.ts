import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { PreferencesInterface } from 'src/app/services/userpreferences.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent implements OnInit {
  @Output() toggleShowPrefModal = new EventEmitter();
  @Output() handleColorChange = new EventEmitter();
  @Output() handleNameChange = new EventEmitter();
  @Output() handleShowBookmarkColors = new EventEmitter();
  @Input() preferences: PreferencesInterface | null;
  name: string | undefined;
  darkColor: string | undefined;

  faCog = faCog;

  constructor() {}

  ngOnInit(): void {
    this.name = this.preferences?.name;
    this.darkColor = this.preferences?.darkColor;
  }

  onClick() {
    this.toggleShowPrefModal.emit();
  }

  stopPropagation(e: Event): void {
    e.stopPropagation();
  }

  onColorChange(e: Event) {
    this.handleColorChange.emit(e);
  }

  onNameChange(e: Event) {
    this.handleNameChange.emit(e);
  }

  onShowColorChange(e: Event) {
    this.handleShowBookmarkColors.emit(e);
  }
}
