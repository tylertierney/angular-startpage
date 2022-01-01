import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() toggleShowPrefModal = new EventEmitter();

  faCog = faCog;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.toggleShowPrefModal.emit();
  }
}
