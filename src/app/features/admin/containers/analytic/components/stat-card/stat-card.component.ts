import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent {

  @Input() title = '';
  @Input() iconUrl = '';
  @Input() stat = '';

  @Input() percent = '';

  @Input() isGrowth = false;
}
