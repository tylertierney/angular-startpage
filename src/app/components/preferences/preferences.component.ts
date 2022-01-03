import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { PreferencesInterface } from 'src/app/services/userpreferences.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent implements OnInit, OnChanges {
  @Output() toggleShowPrefModal = new EventEmitter();
  @Output() handleColorChange = new EventEmitter();
  @Output() handleNameChange = new EventEmitter();
  @Output() handleShowBookmarkColors = new EventEmitter();
  @Input() preferences: PreferencesInterface | null;
  name: string | undefined;
  darkColor: string | undefined;
  showBookmarkColors: boolean | undefined;

  faCog = faCog;

  constructor() {}

  ngOnInit(): void {
    this.name = this.preferences?.name;
    this.darkColor = this.preferences?.darkColor;
    this.showBookmarkColors = this.preferences?.showBookmarkColors;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showBookmarkColors =
      changes['preferences'].currentValue.showBookmarkColors;
    console.log(this.showBookmarkColors);
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
    // console.log(this.showBookmarkColors);
    // this.showBookmarkColors = !this.showBookmarkColors;
    this.handleShowBookmarkColors.emit(e);
  }
}
