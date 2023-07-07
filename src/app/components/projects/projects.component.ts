import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  
  selectedProject: string = "projeto1";
  toggleProject(project: string) {
    this.selectedProject = project;
  }

}
