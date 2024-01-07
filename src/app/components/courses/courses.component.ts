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
}

