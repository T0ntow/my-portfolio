import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCourseComponent } from 'src/app/modal-course/modal-course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async openModal(name: string) {
    console.log("open modal");
    
    const modal = await this.modalCtrl.create({
      component: ModalCourseComponent,
      componentProps: {
        name: name
      }
    });
    modal.present();
  }
}

