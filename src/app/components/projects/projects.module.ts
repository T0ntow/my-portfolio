import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProjectsComponent } from './projects.component';


import { ReactiveFormsModule } from '@angular/forms';

//components:
import { SwiperModule } from 'swiper/types/shared';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ProjectsComponent],
})
export class HomePageModule { }
