import { Component,Input,  OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-course',
  templateUrl: './modal-course.component.html',
  styleUrls: ['./modal-course.component.scss'],
})
export class ModalCourseComponent implements OnInit {
  @Input() name: any;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() { }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  images2 = [
    {'Linguagem de Programação Java - Básico': ''},
    {'Desenvolvendo um Projeto Completo Python com Estruturas de Dados': ''},
    { 'Linguagem de Programação Java - Avançado': ''}
  ]

  pdfUrl = 'assets/curso-pyton.pdf'; // Substitua 'URL_DO_SEU_PDF_AQUI' pela URL do seu arquivo PDF

}
