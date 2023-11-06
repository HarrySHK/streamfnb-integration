import { Component } from '@angular/core';
import {
  Carousel,
  Ripple,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  ngOnInit() {
    initTE({ Carousel, Ripple});

  }
}
