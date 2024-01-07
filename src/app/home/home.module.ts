import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

//components:
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactComponent } from '../components/contact/contact.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { HeaderComponent } from '../components/header/header.component';
import { LinhaDoTempoComponent } from '../components/linha-do-tempo/linha-do-tempo.component';
//modal
import { ModalCourseComponent } from '../modal-course/modal-course.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

//pdf
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [
    HomePage,
    ProjectsComponent,
    ContactComponent,
    CoursesComponent,
    ModalCourseComponent,
    HeaderComponent,
    LinhaDoTempoComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomePageModule { }
