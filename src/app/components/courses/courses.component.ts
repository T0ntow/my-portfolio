import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  @ViewChildren('observer') observerElements!: ElementRef[];

  constructor(
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.observeContent();
  }

  observeContent() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("sss");
          
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

