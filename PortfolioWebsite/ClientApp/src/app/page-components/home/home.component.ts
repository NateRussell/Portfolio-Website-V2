import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../_models/project';
import { fadeInAnimation } from '../content-enter-animations';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [ fadeInAnimation ]
})
export class HomeComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.latest(3)
      .subscribe(projects => this.projects = projects);
  }

  index(): Observable<Project[]> {

    return null;
  }

  get(id: number): Observable<Project> {

    return null;
  }

}
