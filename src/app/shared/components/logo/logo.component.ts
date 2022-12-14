import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  @Input() height = 220;
  @Input() width = 100;
}
