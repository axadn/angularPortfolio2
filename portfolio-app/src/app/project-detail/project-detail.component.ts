import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Observable,of, map } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  details: {[key: string] : ProjectDetails}  ={
    '1' : {
      title: "Project 1",
      slides: [],
      summary: 'a project',
      skills : ['fooling around', 'programming']

    },
    '2' : {
      title: "Project 2",
      slides: [],
      summary: 'a project',
      skills : ['fooling around', 'programming']

    }
  };
  details$: Observable<ProjectDetails> = of(blankProject);

  ngOnInit() {
    this.details$ = this.route.paramMap.pipe(
      map(params => {
        return this.details[params.get('id') ?? ''];
      })
    );
  }
}

const blankProject = {title: '',slides: [], summary: '', skills: []};

interface Slide {
  type: 'image' | 'video';
  src : string;
  description: string;
}

interface ProjectDetails  {
  title: string;
  slides: Slide[];
  summary: string;
  skills: string [];
}