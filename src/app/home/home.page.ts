import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChildren('observer') observerElements!: ElementRef[];

  constructor() { }

  ngOnInit() {
    this.registerSwiper();
  }

  ngAfterViewInit() {
    this.observeContent();
  }

  registerSwiper() {
    register();
  }

  observeContent() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');

        } else {
          entry.target.classList.remove('show');
  
        }
      });
    });
  
    this.observerElements?.forEach(elementRef => {
      const element = elementRef.nativeElement;
      if (element instanceof Element) {
        observer.observe(element);
      }
    });
  }
  
}
