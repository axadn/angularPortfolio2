import { Component, Input } from '@angular/core';
import {Slide} from "../project-detail/project-detail.component";
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  slideIdx: number = 0;
  @Input() slides: Slide [] = [];

  incrementSlide(){
    this.slideIdx = (this.slideIdx + 1) % this.slides.length;
  }

  decrementSlide(){
    this.slideIdx = this.slideIdx === 0 ? this.slides.length - 1 : this.slideIdx - 1;
  }
  
}
