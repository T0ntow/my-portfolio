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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  registerSwiper() {
    register();
  }

  observeContent() {
    console.log("observeContent");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');

        } else {
          // Remove a classe 'fade-in' se o componente não estiver visível
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
