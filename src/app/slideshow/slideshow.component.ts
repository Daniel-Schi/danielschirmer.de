import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit{
  images = ['arrive.jpg', 'sleep.jpg', 'jung5.jpg', 'explore.jpg', 'sleep2.jpg', 'chill1.jpg', 'chill2.jpg', 'chill3.jpg', 'chill4.jpg', 'nala.jpg'];
  headlines = [
    'Arrived at the new home',
    'Sleeping under the couch',
    'Interested in the new room',
    'Exploration tour',
    'Deeply relaxed on the scratching post',
    'Snoozing on the scratching post',
    'Chilling in the bean bag',
    'Stretch in the bean bag',
    'Watching from the bean bag',
    'Lie relaxed and still observe'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
