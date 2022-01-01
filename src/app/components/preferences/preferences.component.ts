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
  @Input() preferences: PreferencesInterface | null;

  faCog = faCog;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.toggleShowPrefModal.emit();
  }

  stopPropagation(e: Event): void {
    e.stopPropagation();
  }

  onColorChange(e: any) {
    this.handleColorChange.emit(e);
  }
}
