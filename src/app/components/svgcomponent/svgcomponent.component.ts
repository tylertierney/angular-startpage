import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svgcomponent',
  templateUrl: './svgcomponent.component.html',
  styleUrls: ['./svgcomponent.component.scss'],
})
export class SvgcomponentComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() color: string;
  @Input() currentColor: string;
  maskUrl: string = '/assets/svg/netflix';

  constructor() {}

  ngOnInit(): void {}
}
