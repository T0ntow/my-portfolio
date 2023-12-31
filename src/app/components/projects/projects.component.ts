import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper'
// init Swiper:
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  swiper?: Swiper;
  @ViewChild('') swiperElement: ElementRef | undefined;

  window = window

  constructor(
  ) { }

  ngOnInit() {
  }
  
  swiperReady() {
    this.swiper = this.swiperElement?.nativeElement.swiper;
  }

  goNext() {
    this.swiper?.slideNext();
  }

  goPrev() {
    this.swiper?.slidePrev();
  }

  selectedProject: string = "projeto1";
  toggleProject(project: string) {
    this.selectedProject = project;
  }

  swiperSlideChange(e: any) {
    console.log("changed", e);
  }

  imagesWallet = [
    '/assets/images/wallet-tablet-celular.png',
    '/assets/images/wallet-pc.png',
  ]

  imagesControleEstoque = [
    '/assets/images/controle-estoque.png',
  ]

  imagesConversor = [
    '/assets/images/conversor-romano.png',
  ]

  imagesTtow = [
    '/assets/images/toow2.png',
  ]
  
  imagesPokedex = [
    '/assets/images/pokedex.png',
  ]

}
