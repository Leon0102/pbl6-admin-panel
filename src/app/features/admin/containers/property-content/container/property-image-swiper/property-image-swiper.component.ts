import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'mp-property-image-swiper',
  templateUrl: './property-image-swiper.component.html',
  styleUrls: ['./property-image-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PropertyImageSwiperComponent implements OnInit {

  @Input() images!: string[];

  constructor() {}

  ngOnInit(): void {
  }

}
