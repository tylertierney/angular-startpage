import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() openPreferences = new EventEmitter();

  faCog = faCog;

  constructor() {}

  test() {
    this.openPreferences.emit();
  }

  ngOnInit(): void {}
}
