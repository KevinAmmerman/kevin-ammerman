import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {

  images = ['mountains.jpg', 'sheep.jpg', 'whisky.jpg'];
  headlines = [
    'A Symphony of Beauty, From Mountains to Coastlines',
    'Scotlands Green Expanse: Where Sheep Grace the Gentle Hills',
    'Where Whisky Becomes the Nectar of Life'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 1);
    }, 5000);
  }
}
