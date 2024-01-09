import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.scss'],
})
export class LinhaDoTempoComponent  implements OnInit {
  @ViewChildren('observer') observerElements!: ElementRef[];

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.observeContent();
  }
  
  observeContent() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          console.log("show");
        } else {
          entry.target.classList.remove('show');
          console.log("hiddeen");
  
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
