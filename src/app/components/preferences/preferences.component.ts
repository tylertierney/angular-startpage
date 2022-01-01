import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import * as convert from 'color-convert';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent implements OnInit {
  @Output() toggleShowPrefModal = new EventEmitter();
  @Output() handleColorChange = new EventEmitter();
  @Input() preferences: any;

  faCog = faCog;

  constructor() {}

  ngOnInit(): void {
    // if (this.preferences) {
    //   const darkColor = this.preferences.darkColor;
    //   if (darkColor[0] === 'v') {
    //     const colorAsString = getComputedStyle(
    //       document.documentElement
    //     ).getPropertyValue('--darkColor');
    //     console.log(colorAsString);
    //     // console.log(convert.hsl.hex());
    //   }
    // }
  }

  onClick() {
    this.toggleShowPrefModal.emit();
  }

  stopPropagation(e: Event): void {
    e.stopPropagation();
  }

  // handleColorChange(e: any): void {

  //   localStorage.setItem(
  //     'startpage-info',
  //     JSON.stringify({ darkColor: e.target.value })
  //   );
  //   console.log(this.preferences);
  // }

  onColorChange(e: any) {
    this.handleColorChange.emit(e);
  }
}
